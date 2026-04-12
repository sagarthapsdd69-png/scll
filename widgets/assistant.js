(function () {
  'use strict';

  // ── Scoped styles (injected once, prefixed to avoid conflicts) ──────────────
  var CSS = [
    '#bpss-asst-root{position:fixed;bottom:28px;right:28px;z-index:2147483647;font-family:"Segoe UI",Arial,sans-serif;font-size:14px;}',
    '#bpss-asst-root *{box-sizing:border-box;margin:0;padding:0;}',
    '.bpss-btn{width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#1e3a8a,#1a73e8);border:none;cursor:pointer;',
    'box-shadow:0 4px 20px rgba(30,58,138,0.5);display:flex;align-items:center;justify-content:center;',
    'transition:transform .2s,box-shadow .2s;outline:none;}',
    '.bpss-btn:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(30,58,138,0.7);}',
    '.bpss-btn:focus-visible{outline:3px solid #1a73e8;outline-offset:3px;}',
    '.bpss-panel{position:absolute;bottom:70px;right:0;width:300px;background:#fff;border-radius:16px;',
    'box-shadow:0 8px 40px rgba(0,0,0,0.18);padding:20px 20px 16px;',
    'animation:bpss-in .2s ease;}',
    '@keyframes bpss-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}',
    '.bpss-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}',
    '.bpss-panel-head h3{font-size:15px;font-weight:700;color:#1e3a8a;}',
    '.bpss-close{background:none;border:none;font-size:20px;cursor:pointer;color:#888;line-height:1;padding:2px 4px;}',
    '.bpss-close:hover{color:#333;}',
    '.bpss-links{list-style:none;border-top:1px solid #f0f0f0;padding-top:12px;}',
    '.bpss-links li{margin-bottom:8px;}',
    '.bpss-links a{display:block;padding:8px 12px;border-radius:8px;color:#1e3a8a;text-decoration:none;',
    'font-size:13px;font-weight:500;transition:background .15s;}',
    '.bpss-links a:hover{background:#f0f4ff;}',
    '.bpss-footer{margin-top:12px;font-size:11px;color:#aaa;text-align:center;}'
  ].join('');

  function injectStyles() {
    if (document.getElementById('bpss-asst-styles')) return;
    var tag = document.createElement('style');
    tag.id = 'bpss-asst-styles';
    tag.textContent = CSS;
    document.head.appendChild(tag);
  }

  // ── React component (no JSX — pure React.createElement) ────────────────────
  var e = React.createElement;
  var useState = React.useState;
  var useEffect = React.useEffect;

  var NAV_LINKS = [
    { label: '🏠 Home',            href: '#home' },
    { label: '📖 About',           href: '#about' },
    { label: '🎓 Academics',       href: '#classes' },
    { label: '🖼️ Gallery',         href: '#gallery' },
    { label: '📞 Contact Us',      href: '#contact' },
  ];

  function AssistantWidget() {
    var _open = useState(false);
    var open = _open[0];
    var setOpen = _open[1];

    useEffect(function () { injectStyles(); }, []);

    // Close panel when a nav link is clicked
    function handleLink(e) {
      setOpen(false);
    }

    return e('div', { id: 'bpss-asst-root' },

      // ── Panel ──────────────────────────────────────────────────────────────
      open && e('div', { className: 'bpss-panel', role: 'dialog', 'aria-label': 'BPSS Assistant' },
        e('div', { className: 'bpss-panel-head' },
          e('h3', null, '🎓 BPSS Assistant'),
          e('button', { className: 'bpss-close', onClick: function () { setOpen(false); }, 'aria-label': 'Close' }, '×')
        ),
        e('p', { style: { fontSize: '13px', color: '#555', lineHeight: '1.5' } },
          'Welcome to Brilliant Pupils\' Secondary School. Quick links:'
        ),
        e('ul', { className: 'bpss-links' },
          NAV_LINKS.map(function (link) {
            return e('li', { key: link.href },
              e('a', { href: link.href, onClick: handleLink }, link.label)
            );
          })
        ),
        e('p', { className: 'bpss-footer' }, 'Arjundhara-06, Jhapa, Nepal')
      ),

      // ── Trigger button ─────────────────────────────────────────────────────
      e('button', {
        className: 'bpss-btn',
        onClick: function () { setOpen(function (v) { return !v; }); },
        'aria-label': open ? 'Close assistant' : 'Open assistant',
        title: 'BPSS Assistant'
      },
        e('svg', { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
          e('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })
        )
      )
    );
  }

  // ── Mount ───────────────────────────────────────────────────────────────────
  function mount() {
    var node = document.getElementById('react-assistant');
    if (!node) {
      // Create mount point if it doesn't exist yet
      node = document.createElement('div');
      node.id = 'react-assistant';
      document.body.appendChild(node);
    }
    ReactDOM.createRoot(node).render(e(AssistantWidget));
  }

  // Safe: run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

}());
