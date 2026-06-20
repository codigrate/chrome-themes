// Content script injected on codigrate.com only.
//
// The popup saves the user's chosen Codigrate Chrome theme into
// chrome.storage.sync under "selectedTheme" (a kebab-case slug, e.g.
// "aurora-borealis"). A regular web page cannot read chrome.storage, so this
// bridge exposes the slug to codigrate.com in two ways:
//   1. a data attribute on <html> (read synchronously by the site on boot), and
//   2. a window.postMessage signal (so a page that loaded before us, or one that
//      asks again, still gets the value).
// The site then OFFERS to match its skin to the active browser theme — it never
// changes anything without the user accepting.

( function () {
  var ATTR = 'codigrateChromeTheme';
  var SOURCE = 'codigrate-chrome-theme';
  var REQUEST = 'codigrate-chrome-theme-request';

  function publish( slug ) {
    if ( !slug ) {
      return;
    }
    try {
      document.documentElement.dataset[ ATTR ] = slug;
    } catch ( e ) {
      // documentElement may not exist yet on the very first tick; the
      // postMessage below + the site's request handshake still deliver it.
    }
    window.postMessage( { source: SOURCE, theme: slug }, '*' );
  }

  function read() {
    try {
      chrome.storage.sync.get( [ 'selectedTheme' ], function ( res ) {
        if ( res && res.selectedTheme ) {
          publish( res.selectedTheme );
        }
      } );
    } catch ( e ) {
      // Extension context invalidated (e.g. just updated) — ignore.
    }
  }

  // Publish once now (the user already picked a theme in the popup).
  read();

  // Re-publish if the user switches their theme in the popup while a
  // codigrate.com tab is open.
  try {
    chrome.storage.onChanged.addListener( function ( changes, area ) {
      if ( area === 'sync' && changes.selectedTheme ) {
        publish( changes.selectedTheme.newValue );
      }
    } );
  } catch ( e ) {
    // ignore
  }

  // Let the page ask explicitly, in case it booted after our initial publish.
  window.addEventListener( 'message', function ( ev ) {
    if ( ev.source === window && ev.data && ev.data.source === REQUEST ) {
      read();
    }
  } );
} )();
