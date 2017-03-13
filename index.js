'use strict';

module.exports = {
  generateCSS: generateCSS,
  styles: ['minimal', 'style-1']
};

var baseCSS = Stylesheet([
  Declaration('.tagplay-widget', [
    Property('overflow', 'auto')
  ]),
  Declaration('.tagplay-widget a img', [
    Property('border', 'none')
  ]),
  Declaration('.tagplay-widget img.emoji', [
    Property('height', '1em'),
    Property('width', '1em'),
    Property('margin', '0 .05em 0 .1em'),
    Property('vertical-align', '-0.1em')
  ]),
  Declaration('.tagplay-embed-iframe', [
    Property('position', 'relative'),
    Property('overflow', 'hidden'),
    Property('height', 0)
  ]),
  Declaration('.tagplay-embed-iframe iframe', [
    Property('position', 'absolute'),
    Property('height', '100%'),
    Property('width', '100%'),
    Property('border', 0)
  ]),
  Declaration('.tagplay-spinner', [
    Property('height', '60px'),
    Property('width', '60px'),
    Property('margin', '40px auto'),
    Property('position', 'relative'),
    Property('-webkit-animation', 'tagplay-rotation .6s infinite linear'),
    Property('-moz-animation', 'tagplay-rotation .6s infinite linear'),
    Property('-o-animation', 'tagplay-rotation .6s infinite linear'),
    Property('animation', 'tagplay-rotation .6s infinite linear'),
    Property('border-left', '6px solid rgba(18,196,161,.15)'),
    Property('border-right', '6px solid rgba(18,196,161,.15)'),
    Property('border-bottom', '6px solid rgba(18,196,161,.15)'),
    Property('border-top', '6px solid rgba(18,196,161,.8)'),
    Property('border-radius', '100%')
  ]),
  Declaration('.tagplay-spinner-absolute', [
    Property('position', 'absolute'),
    Property('top', 0),
    Property('left', 0),
    Property('right', 0),
    Property('bottom', 0),
    Property('margin', 'auto'),
    Property('z-index', -1)
  ]),
  Directive('-webkit-keyframes tagplay-rotation', [
    Declaration('from', [
      Property('-webkit-transform', 'rotate(0deg)')
    ]),
    Declaration('to', [
      Property('-webkit-transform', 'rotate(359deg)')
    ])
  ]),
  Directive('-moz-keyframes tagplay-rotation', [
    Declaration('from', [
      Property('-moz-transform', 'rotate(0deg)')
    ]),
    Declaration('to', [
      Property('-moz-transform', 'rotate(359deg)')
    ])
  ]),
  Directive('-o-keyframes tagplay-rotation', [
    Declaration('from', [
      Property('-o-transform', 'rotate(0deg)')
    ]),
    Declaration('to', [
      Property('-o-transform', 'rotate(359deg)')
    ])
  ]),
  Directive('keyframes tagplay-rotation', [
    Declaration('from', [
      Property('transform', 'rotate(0deg)')
    ]),
    Declaration('to', [
      Property('transform', 'rotate(359deg)')
    ])
  ]),
  Declaration('.tagplay-lightbox-backdrop', [
    Property('position', 'fixed'),
    Property('z-index', 2000),
    Property('top', 0),
    Property('left', 0),
    Property('right', 0),
    Property('bottom', 0),
    Property('background', 'rgba(0, 0, 0, 0.7)'),
    Property('overflow', 'auto')
  ]),
  Declaration('.tagplay-lightbox-close', [
    Property('position', 'absolute'),
    Property('top', 0),
    Property('right', 0),
    Property('width', '40px'),
    Property('height', '40px'),
    Property('line-height', '40px'),
    Property('text-align', 'center'),
    Property('font-size', '40px'),
    Property('color', '#FFF'),
    Property('font-weight', 'bold'),
    Property('text-decoration', 'none')
  ]),
  Declaration('.tagplay-lightbox', [
    Property('position', 'relative'),
    Property('max-width', '500px'),
    Property('margin', '30px auto 0'),
    Property('background', '#FFF')
  ]),
  Declaration('.tagplay-lightbox .tagplay-media-container', [
    Property('display', 'block')
  ]),
  Declaration('.tagplay-lightbox-prev, .tagplay-lightbox-next', [
    Property('font-size', '100px'),
    Property('line-height', '100px'),
    Property('width', '200px'),
    Property('height', '100%'),
    Property('min-height', '250px'),
    Property('text-align', 'center'),
    Property('position', 'absolute'),
    Property('top', 0),
    Property('text-decoration', 'none'),
    Property('color', '#FFF')
  ]),
  Declaration('.tagplay-lightbox-prev:after, .tagplay-lightbox-next:after', [
    Property('position', 'absolute'),
    Property('top', '50%'),
    Property('left', 0),
    Property('margin-top', '-75px'),
    Property('width', '100%')
  ]),
  Declaration('.tagplay-lightbox-prev', [
    Property('right', '100%')
  ]),
  Declaration('.tagplay-lightbox-prev:after', [
    Property('content', "'‹'")
  ]),
  Declaration('.tagplay-lightbox-next', [
    Property('left', '100%')
  ]),
  Declaration('.tagplay-lightbox-next:after', [
    Property('content', "'›'")
  ]),
  Declaration('.tagplay-lightbox-prev, .tagplay-lightbox-next', [
    Property('width', '100px')
  ], 'max-width:767px'),
  Declaration('.tagplay-lightbox-prev, .tagplay-lightbox-next', [
    Property('width', '30px')
  ], 'max-width:650px'),
  Declaration('.tagplay-lightbox-prev, .tagplay-lightbox-next', [
    Property('text-shadow', '2px 0 5px rgba(0, 0, 0, 0.5)'),
    Property('width', '100px')
  ], 'max-width:550px'),
  Declaration('.tagplay-lightbox-prev', [
    Property('left', '5px'),
    Property('right', 'auto'),
    Property('text-align', 'left')
  ], 'max-width:550px'),
  Declaration('.tagplay-lightbox-next', [
    Property('right', '5px'),
    Property('left', 'auto'),
    Property('text-align', 'right')
  ], 'max-width:550px'),
  Declaration('.tagplay-waterfall-column', [
    Property('float', 'left')
  ]),
  Declaration('.tagplay-media-container', [
    Property('display', 'inline-block'),
    Property('vertical-align', 'top')
  ]),
  Declaration('.tagplay-media', [
    Property('position', 'relative')
  ]),
  Declaration('.tagplay-media-object, .tagplay-media-object img', [
    Property('max-width', 'none'),
    Property('width', '100%'),
    Property('display', 'block')
  ]),
  Declaration('.tagplay-media-video:before', [
    Property('content', "''"),
    Property('position', 'absolute'),
    Property('top', '0'),
    Property('left', '0'),
    Property('right', '0'),
    Property('bottom', '0'),
    Property('height', '0'),
    Property('width', '0'),
    Property('margin', 'auto'),
    Property('z-index', '100'),
    Property('opacity', '0.7'),
    Property('border-style', 'solid'),
    Property('border-left-width', '45px'),
    Property('border-top-width', '25px'),
    Property('border-bottom-width', '25px'),
    Property('border-right-width', '0'),
    Property('border-left-color', '#FFF'),
    Property('border-top-color', 'transparent'),
    Property('border-bottom-color', 'transparent')
  ]),
  Declaration('.tagplay-media-multi-cell', [
    Property('display', 'inline-block'),
    Property('vertical-align', 'top'),
    Property('position', 'relative'),
    Property('overflow', 'hidden')
  ]),
  Declaration('.tagplay-media-multi-object', [
    Property('background-size', 'cover'),
    Property('background-position', 'center center'),
    Property('height', 0)
  ]),
  Declaration('.tagplay-media-multi-more', [
    Property('position', 'absolute'),
    Property('display', 'block'),
    Property('top', 0),
    Property('left', 0),
    Property('right', 0),
    Property('bottom', 0),
    Property('background', 'rgba(0, 0, 0, 0.3)'),
    Property('color', '#FFF'),
    Property('text-align', 'center')
  ]),
  Declaration('.tagplay-media-multi-more-text', [
    Property('position', 'absolute'),
    Property('height', '50px'),
    Property('line-height', '50px'),
    Property('font-size', '50px'),
    Property('top', 0),
    Property('left', 0),
    Property('right', 0),
    Property('bottom', 0),
    Property('margin', 'auto')
  ]),
  Declaration('.tagplay-link-info-embed, .tagplay-media-embed', [
    Property('position', 'relative'),
    Property('overflow', 'hidden'),
    Property('min-height', '75px'),
    Property('z-index', 0)
  ]),
  Declaration('.tagplay-lightbox .tagplay-link-info-embed, .tagplay-lightbox .tagplay-media-embed', [
    Property('min-height', '158px')
  ]),
  Declaration('.tagplay-link-info-image', [
    Property('max-width', '100%'),
    Property('display', 'block'),
    Property('margin', 'auto')
  ]),
  Declaration('.tagplay-media-text, .tagplay-media-username, .tagplay-media-date', [
    Property('margin', 0)
  ]),
  Declaration('.tagplay-media-text', [
    Property('overflow', 'hidden'),
    Property('text-overflow', 'ellipsis')
  ]),
  Declaration('.tagplay-media-options .tagplay-icon', [
    Property('font-style', 'normal'),
    Property('display', 'inline-block'),
    Property('height', '16px'),
    Property('width', '16px'),
    Property('background-position', 'center center'),
    Property('background-repeat', 'no-repeat'),
    Property('background-size', 'contain'),
    Property('vertical-align', 'middle'),
    Property('overflow', 'hidden'),
    Property('text-indent', '-5em')
  ]),
  Declaration('.tagplay-like, .tagplay-flag', [
    Property('cursor', 'pointer')
  ]),
  Declaration('.tagplay-icon-like', [
    Property('background-image', "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20%20%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20%20%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20%20%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20%20%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22%20%20%20xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22%20%20%20version%3D%221.1%22%20%20%20x%3D%220px%22%20%20%20y%3D%220px%22%20%20%20width%3D%22512px%22%20%20%20height%3D%22512px%22%20%20%20viewBox%3D%220%200%20512%20512%22%20%20%20enable-background%3D%22new%200%200%20512%20512%22%20%20%20xml%3Aspace%3D%22preserve%22%20%20%20id%3D%22svg2%22%20%20%20inkscape%3Aversion%3D%220.48.4%20r9939%22%20%20%20sodipodi%3Adocname%3D%22favorite.svg%22%3E%3Cmetadata%20%20%20id%3D%22metadata9%22%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20%20%20%20%20%20%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20%20%20%20%20%20%20%20%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%20%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cdefs%20%20%20id%3D%22defs7%22%20%2F%3E%3Csodipodi%3Anamedview%20%20%20pagecolor%3D%22%23ffffff%22%20%20%20bordercolor%3D%22%23666666%22%20%20%20borderopacity%3D%221%22%20%20%20objecttolerance%3D%2210%22%20%20%20gridtolerance%3D%2210%22%20%20%20guidetolerance%3D%2210%22%20%20%20inkscape%3Apageopacity%3D%220%22%20%20%20inkscape%3Apageshadow%3D%222%22%20%20%20inkscape%3Awindow-width%3D%22728%22%20%20%20inkscape%3Awindow-height%3D%22480%22%20%20%20id%3D%22namedview5%22%20%20%20showgrid%3D%22false%22%20%20%20inkscape%3Azoom%3D%220.4609375%22%20%20%20inkscape%3Acx%3D%22256%22%20%20%20inkscape%3Acy%3D%22256%22%20%20%20inkscape%3Awindow-x%3D%220%22%20%20%20inkscape%3Awindow-y%3D%220%22%20%20%20inkscape%3Awindow-maximized%3D%220%22%20%20%20inkscape%3Acurrent-layer%3D%22svg2%22%20%2F%3E%3Cpath%20%20%20id%3D%22favorite-2-icon%22%20%20%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20%20%20d%3D%22M%20492.66271%2C95.826656%20C%20443.47117%2C-4.8245564%20294.03076%2C2.9571145%20256%2C90.651037%20217.96924%2C2.9571145%2068.528824%2C-4.8245564%2019.337286%2C95.825448%20-38.65087%2C214.47465%2095.92876%2C327.49607%20256%2C489.39421%20416.07124%2C327.49607%20550.65086%2C214.47465%20492.66271%2C95.826656%20z%22%20%20%20inkscape%3Aconnector-curvature%3D%220%22%20%2F%3E%3C%2Fsvg%3E')")
  ]),
  Declaration('.tagplay-user-liked .tagplay-icon-like', [
    Property('background-image', "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20%20%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20%20%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20%20%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20%20%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22%20%20%20xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22%20%20%20version%3D%221.1%22%20%20%20x%3D%220px%22%20%20%20y%3D%220px%22%20%20%20width%3D%22512px%22%20%20%20height%3D%22512px%22%20%20%20viewBox%3D%220%200%20512%20512%22%20%20%20enable-background%3D%22new%200%200%20512%20512%22%20%20%20xml%3Aspace%3D%22preserve%22%20%20%20id%3D%22svg2%22%20%20%20inkscape%3Aversion%3D%220.48.4%20r9939%22%20%20%20sodipodi%3Adocname%3D%22favorited.svg%22%3E%3Cmetadata%20%20%20id%3D%22metadata9%22%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20%20%20%20%20%20%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20%20%20%20%20%20%20%20%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%20%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cdefs%20%20%20id%3D%22defs7%22%20%2F%3E%3Csodipodi%3Anamedview%20%20%20pagecolor%3D%22%23ffffff%22%20%20%20bordercolor%3D%22%23666666%22%20%20%20borderopacity%3D%221%22%20%20%20objecttolerance%3D%2210%22%20%20%20gridtolerance%3D%2210%22%20%20%20guidetolerance%3D%2210%22%20%20%20inkscape%3Apageopacity%3D%220%22%20%20%20inkscape%3Apageshadow%3D%222%22%20%20%20inkscape%3Awindow-width%3D%22728%22%20%20%20inkscape%3Awindow-height%3D%22480%22%20%20%20id%3D%22namedview5%22%20%20%20showgrid%3D%22false%22%20%20%20inkscape%3Azoom%3D%220.4609375%22%20%20%20inkscape%3Acx%3D%22256%22%20%20%20inkscape%3Acy%3D%22256%22%20%20%20inkscape%3Awindow-x%3D%220%22%20%20%20inkscape%3Awindow-y%3D%220%22%20%20%20inkscape%3Awindow-maximized%3D%220%22%20%20%20inkscape%3Acurrent-layer%3D%22svg2%22%20%2F%3E%3Cpath%20%20%20id%3D%22favorite-2-icon%22%20%20%20style%3D%22fill%3A%23ff5555%3Bfill-opacity%3A1%22%20%20%20d%3D%22M%20492.66271%2C95.826656%20C%20443.47117%2C-4.8245564%20294.03076%2C2.9571145%20256%2C90.651037%20217.96924%2C2.9571145%2068.528824%2C-4.8245564%2019.337286%2C95.825448%20-38.65087%2C214.47465%2095.92876%2C327.49607%20256%2C489.39421%20416.07124%2C327.49607%20550.65086%2C214.47465%20492.66271%2C95.826656%20z%22%20%20%20inkscape%3Aconnector-curvature%3D%220%22%20%2F%3E%3C%2Fsvg%3E')")
  ]),
  Declaration('.tagplay-flag', [
    Property('float', 'right')
  ]),
  Declaration('.tagplay-icon-flag', [
    Property('background-image', "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20%20%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20%20%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20%20%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20%20%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22%20%20%20xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22%20%20%20version%3D%221.1%22%20%20%20id%3D%22Layer_1%22%20%20%20x%3D%220px%22%20%20%20y%3D%220px%22%20%20%20width%3D%22512px%22%20%20%20height%3D%22512px%22%20%20%20viewBox%3D%220%200%20512%20512%22%20%20%20enable-background%3D%22new%200%200%20512%20512%22%20%20%20xml%3Aspace%3D%22preserve%22%20%20%20inkscape%3Aversion%3D%220.48.4%20r9939%22%20%20%20sodipodi%3Adocname%3D%22flag.svg%22%3E%3Cmetadata%20%20%20id%3D%22metadata13%22%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20%20%20%20%20%20%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20%20%20%20%20%20%20%20%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%20%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cdefs%20%20%20id%3D%22defs11%22%20%2F%3E%3Csodipodi%3Anamedview%20%20%20pagecolor%3D%22%23ffffff%22%20%20%20bordercolor%3D%22%23666666%22%20%20%20borderopacity%3D%221%22%20%20%20objecttolerance%3D%2210%22%20%20%20gridtolerance%3D%2210%22%20%20%20guidetolerance%3D%2210%22%20%20%20inkscape%3Apageopacity%3D%220%22%20%20%20inkscape%3Apageshadow%3D%222%22%20%20%20inkscape%3Awindow-width%3D%22708%22%20%20%20inkscape%3Awindow-height%3D%22480%22%20%20%20id%3D%22namedview9%22%20%20%20showgrid%3D%22false%22%20%20%20inkscape%3Azoom%3D%220.4609375%22%20%20%20inkscape%3Acx%3D%22594.44068%22%20%20%20inkscape%3Acy%3D%22256%22%20%20%20inkscape%3Awindow-x%3D%220%22%20%20%20inkscape%3Awindow-y%3D%220%22%20%20%20inkscape%3Awindow-maximized%3D%220%22%20%20%20inkscape%3Acurrent-layer%3D%22Layer_1%22%20%2F%3E%3Cg%20%20%20id%3D%22g3%22%20%20%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%3E%20%3Cpath%20%20%20d%3D%22M483.932%2C47.29c-26.72%2C21.71-55.73%2C42.46-89.55%2C51.16c-20.05%2C5.17-41.561%2C4.15-61.05-2.83%20%20%20c-32.49-11.5-59.341-34.58-91.771-46.22c-19.03-7.16-39.91-9.12-59.95-5.83c-29.68%2C4.86-56.739%2C19.26-81.62%2C35.58%20%20%20c-0.1%2C86.75-0.039%2C173.51-0.029%2C260.27c25.46-16.641%2C53.189-31.38%2C83.63-35.891c21.93-3.389%2C44.66%2C0.061%2C64.97%2C8.871%20%20%20c27.48%2C11.369%2C51.18%2C30.14%2C78.811%2C41.209c19.33%2C7.971%2C41%2C10.641%2C61.529%2C6.311c36.04-7.58%2C66.9-29.439%2C94.97-52.29%20%20%20C484.092%2C220.859%2C483.972%2C134.07%2C483.932%2C47.29z%22%20%20%20id%3D%22path5%22%20%20%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20%2F%3E%20%3Cpath%20%20%20d%3D%22M73.5%2C426.784V73.216c9.064-6.325%2C15-16.824%2C15-28.716c0-19.33-15.67-35-35-35s-35%2C15.67-35%2C35%20%20%20c0%2C11.892%2C5.936%2C22.391%2C15%2C28.716v353.568c-9.064%2C6.325-15%2C16.824-15%2C28.716c0%2C19.33%2C15.67%2C35%2C35%2C35s35-15.67%2C35-35%20%20%20C88.5%2C443.608%2C82.565%2C433.109%2C73.5%2C426.784z%22%20%20%20id%3D%22path7%22%20%20%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')")
  ]),
  Declaration('.tagplay-user-flagged .tagplay-icon-flag', [
    Property('background-image', "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20%20%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20%20%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20%20%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20%20%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22%20%20%20xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22%20%20%20version%3D%221.1%22%20%20%20id%3D%22Layer_1%22%20%20%20x%3D%220px%22%20%20%20y%3D%220px%22%20%20%20width%3D%22512px%22%20%20%20height%3D%22512px%22%20%20%20viewBox%3D%220%200%20512%20512%22%20%20%20enable-background%3D%22new%200%200%20512%20512%22%20%20%20xml%3Aspace%3D%22preserve%22%20%20%20inkscape%3Aversion%3D%220.48.4%20r9939%22%20%20%20sodipodi%3Adocname%3D%22flag.svg%22%3E%3Cmetadata%20%20%20id%3D%22metadata13%22%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20%20%20%20%20%20%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20%20%20%20%20%20%20%20%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%20%2F%3E%3Cdc%3Atitle%3E%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cdefs%20%20%20id%3D%22defs11%22%20%2F%3E%3Csodipodi%3Anamedview%20%20%20pagecolor%3D%22%23ffffff%22%20%20%20bordercolor%3D%22%23666666%22%20%20%20borderopacity%3D%221%22%20%20%20objecttolerance%3D%2210%22%20%20%20gridtolerance%3D%2210%22%20%20%20guidetolerance%3D%2210%22%20%20%20inkscape%3Apageopacity%3D%220%22%20%20%20inkscape%3Apageshadow%3D%222%22%20%20%20inkscape%3Awindow-width%3D%22708%22%20%20%20inkscape%3Awindow-height%3D%22480%22%20%20%20id%3D%22namedview9%22%20%20%20showgrid%3D%22false%22%20%20%20inkscape%3Azoom%3D%220.4609375%22%20%20%20inkscape%3Acx%3D%22256%22%20%20%20inkscape%3Acy%3D%22256%22%20%20%20inkscape%3Awindow-x%3D%220%22%20%20%20inkscape%3Awindow-y%3D%220%22%20%20%20inkscape%3Awindow-maximized%3D%220%22%20%20%20inkscape%3Acurrent-layer%3D%22Layer_1%22%20%2F%3E%3Cg%20%20%20id%3D%22g3%22%20%20%20style%3D%22fill%3A%23ff5555%3Bfill-opacity%3A1%22%3E%20%3Cpath%20%20%20d%3D%22M483.932%2C47.29c-26.72%2C21.71-55.73%2C42.46-89.55%2C51.16c-20.05%2C5.17-41.561%2C4.15-61.05-2.83%20%20%20c-32.49-11.5-59.341-34.58-91.771-46.22c-19.03-7.16-39.91-9.12-59.95-5.83c-29.68%2C4.86-56.739%2C19.26-81.62%2C35.58%20%20%20c-0.1%2C86.75-0.039%2C173.51-0.029%2C260.27c25.46-16.641%2C53.189-31.38%2C83.63-35.891c21.93-3.389%2C44.66%2C0.061%2C64.97%2C8.871%20%20%20c27.48%2C11.369%2C51.18%2C30.14%2C78.811%2C41.209c19.33%2C7.971%2C41%2C10.641%2C61.529%2C6.311c36.04-7.58%2C66.9-29.439%2C94.97-52.29%20%20%20C484.092%2C220.859%2C483.972%2C134.07%2C483.932%2C47.29z%22%20%20%20id%3D%22path5%22%20%20%20style%3D%22fill%3A%23ff5555%3Bfill-opacity%3A1%22%20%2F%3E%20%3Cpath%20%20%20d%3D%22M73.5%2C426.784V73.216c9.064-6.325%2C15-16.824%2C15-28.716c0-19.33-15.67-35-35-35s-35%2C15.67-35%2C35%20%20%20c0%2C11.892%2C5.936%2C22.391%2C15%2C28.716v353.568c-9.064%2C6.325-15%2C16.824-15%2C28.716c0%2C19.33%2C15.67%2C35%2C35%2C35s35-15.67%2C35-35%20%20%20C88.5%2C443.608%2C82.565%2C433.109%2C73.5%2C426.784z%22%20%20%20id%3D%22path7%22%20%20%20style%3D%22fill%3A%23ff5555%3Bfill-opacity%3A1%22%20%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')")
  ]),
  Declaration('.tagplay-user-liked, .tagplay-user-flagged', [
    Property('color', '#F55')
  ])
]);

var styles = {
  'style-1': Stylesheet([
    Declaration('', [
      Property('font-family', 'helvetica, verdana, sans-serif'),
      Property('color', '#34495E'),
      Property('background', 'none')
    ]),
    Declaration('.tagplay-media-inner', [
      Property('background', '#FFF'),
      Property('border-radius', '4px'),
      Property('padding', '5px'),
      Property('position', 'relative'),
      Property('min-height', '50px')
    ]),
    Declaration('p.tagplay-media-username', [
      Property('font-size', '12px'),
      Property('text-align', 'right'),
      Property('color', '#FFF'),
      Property('background-color', '#34495E'),
      Property('padding', '3px 9px'),
      Property('position', 'absolute'),
      Property('z-index', 2),
      Property('top', '12px'),
      Property('right', '-10px'),
      Property('left', 'auto'),
      Property('width', 'auto'),
      Property('border', '1px solid transparent'),
      Property('border-radius', '2px 2px 0 2px')
    ]),
    Declaration('.tagplay-media-username a', [
      Property('color', '#FFF'),
      Property('text-decoration', 'none'),
      Property('border', 0)
    ]),
    Declaration('p.tagplay-media-username:after', [
      Property('display', 'block'),
      Property('height', '0px'),
      Property('position', 'absolute'),
      Property('bottom', '-11px'),
      Property('right', '-1px'),
      Property('content', "''"),
      Property('border-bottom', '10px solid transparent'),
      Property('border-left', '10px solid #0B131B')
    ]),
    Declaration('.tagplay-media-index', [
      Property('text-align', 'center'),
      Property('font-style', 'italic'),
      Property('font-size', 'smaller')
    ]),
    Declaration('p.tagplay-media-text', [
      Property('font-size', '22px'),
      Property('line-height', '31px'),
      Property('font-weight', 'bold'),
      Property('padding', '40px 15px 25px'),
      Property('overflow', 'hidden'),
      Property('text-overflow', 'ellipsis'),
      Property('text-align', 'left')
    ]),
    Declaration('.tagplay-media + .tagplay-media-text', [
      Property('margin', '5px 0 0 0'),
      Property('padding', '10px'),
      Property('background-color', '#F6F6F6'),
      Property('border-radius', '4px'),
      Property('position', 'relative'),
      Property('overflow-y', 'auto'),
      Property('max-height', '60px'),
      Property('font-size', '16px'),
      Property('line-height', '23px'),
      Property('font-weight', 'normal')
    ]),
    Declaration('.tagplay-media-text a', [
      Property('color', '#12C4A1'),
      Property('text-decoration', 'none'),
      Property('border', 0)
    ]),
    Declaration('.tagplay-media-text a:hover, .tagplay-media-text a:active, .tagplay-media-text a:focus', [
      Property('text-decoration', 'underline')
    ]),
    Declaration('.tagplay-waterfall-column .tagplay-media + .tagplay-media-text', [
      Property('max-height', 'none')
    ]),
    Declaration('.tagplay-link-info', [
      Property('border', '1px solid #BDC3C7'),
      Property('border-radius', '2px'),
      Property('padding', '10px'),
      Property('margin', '5px 0 0 0')
    ]),
    Declaration('.tagplay-link-info-image', [
      Property('margin-bottom', '5px')
    ]),
    Declaration('.tagplay-link-info-title', [
      Property('font-size', '16px'),
      Property('line-height', '23px'),
      Property('margin', '0')
    ]),
    Declaration('.tagplay-link-info-description', [
      Property('font-size', '14px'),
      Property('line-height', '20px'),
      Property('margin', '0')
    ]),
    Declaration('.tagplay-link-info-link', [
      Property('color', 'inherit'),
      Property('text-decoration', 'none'),
      Property('font-weight', 'inherit'),
      Property('font-style', 'inherit'),
      Property('font-size', 'inherit'),
      Property('background', 'none'),
      Property('border', 'none')
    ]),
    Declaration('.tagplay-media-date', [
      Property('text-align', 'right'),
      Property('font-size', '12px'),
      Property('font-weight', 'normal'),
      Property('font-style', 'italic'),
      Property('line-height', '23px'),
      Property('margin-top', '5px'),
      Property('padding', '0 5px')
    ]),
    Declaration('.tagplay-media-username + .tagplay-media-date', [
      Property('margin-top', '35px')
    ]),
    Declaration('.tagplay-media-object, .tagplay-media-embed', [
      Property('border-radius', '3px')
    ]),
    Declaration('.tagplay-media-multi', [
      Property('border-radius', '3px'),
      Property('overflow', 'hidden')
    ]),
    Declaration('.tagplay-media-username:before', [
      Property('content', "''"),
      Property('display', 'inline-block'),
      Property('height', '1.4em'),
      Property('width', '1.4em'),
      Property('background-position', 'center center'),
      Property('background-repeat', 'no-repeat'),
      Property('background-size', 'contain'),
      Property('vertical-align', 'top'),
      Property('margin-right', '3px')
    ]),
    Declaration('.tagplay-media-options', [
      Property('margin', '5px 0 0'),
      Property('color', '#95A5A6'),
      Property('font-size', '10px'),
      Property('line-height', '23px')
    ]),
    Declaration('.tagplay-media-options:last-child', [
      Property('overflow', 'hidden')
    ]),
    Declaration('.tagplay-like', [
      Property('float', 'left'),
      Property('margin-right', '5px')
    ]),
    Declaration('.tagplay-flag', [
      Property('margin-left', '5px')
    ]),
    Declaration('.tagplay-media-email .tagplay-media-username:before', [
      Property('background-image', "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%22512px%22%20height%3D%22512px%22%20viewBox%3D%220%200%20512%20512%22%20enable-background%3D%22new%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3Ecircle%2C%20ellipse%2C%20line%2C%20path%2C%20polygon%2C%20polyline%2C%20rect%2C%20text%20%7B%20fill%3A%20white%20!important%3B%20%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22email-11-icon%22%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20d%3D%22M373.945%2C148.019c-2.779%2C9.269-11.122%2C37.539-13.439%2C47.735l-27.807%2C102.884%20c-1.39%2C5.097-1.854%2C9.732-1.854%2C13.903c0%2C7.414%2C4.171%2C11.586%2C12.05%2C11.586c8.806%2C0%2C19.928-4.636%2C29.196-12.05%20c22.709-17.61%2C37.538-51.906%2C37.538-87.591c0-42.636-19.928-79.713-53.295-100.566c-20.854-12.514-50.051-19.465-82.956-19.465%20c-97.785%2C0-166.375%2C64.882-166.375%2C156.644c0%2C88.981%2C61.638%2C147.374%2C154.789%2C147.374c24.1%2C0%2C49.588-3.707%2C70.906-10.196%20c18.074-5.561%2C29.66-11.122%2C51.906-24.562l28.271%2C40.782c-25.027%2C14.831-36.149%2C20.393-57.932%2C26.879%20c-31.514%2C9.734-64.881%2C14.831-98.248%2C14.831c-65.346%2C0-116.326-18.538-152.937-55.149C69.001%2C366.763%2C50%2C317.638%2C50%2C263.879%20c0-57.467%2C19.466-107.056%2C56.54-144.595c42.637-42.636%2C98.714-63.491%2C170.546-63.491C385.069%2C55.793%2C462%2C125.31%2C462%2C222.169%20c0%2C43.563-15.757%2C83.419-44.027%2C111.689c-24.1%2C24.1-55.613%2C38.003-86.663%2C38.003c-18.074%2C0-32.904-6.952-39.856-18.074%20c-2.317-3.707-2.781-6.025-4.171-14.367c-17.611%2C20.392-36.149%2C29.196-62.1%2C29.196c-45.882%2C0-75.078-34.294-75.078-87.127%20c0-78.321%2C51.441-143.202%2C113.078-143.202c25.953%2C0%2C38.931%2C6.486%2C51.442%2C25.953l4.635-16.222H373.945z%20M278.478%2C285.66%20c11.122-21.781%2C18.536-50.051%2C18.536-71.37c0-19-10.657-31.976-26.878-31.976c-17.611%2C0-33.832%2C11.586-45.418%2C33.367%20c-11.123%2C20.854-18.538%2C48.197-18.538%2C69.515c0%2C24.563%2C9.269%2C37.539%2C26.881%2C37.539C250.207%2C322.735%2C266.428%2C309.296%2C278.478%2C285.66z%20%22%2F%3E%3C%2Fsvg%3E')")
    ]),
    Declaration('.tagplay-media-facebook .tagplay-media-username:before', [
      Property('background-image', "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20%20%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20%20%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20%20%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20%20%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22%20%20%20xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22%20%20%20version%3D%221.1%22%20%20%20x%3D%220px%22%20%20%20y%3D%220px%22%20%20%20width%3D%22512px%22%20%20%20height%3D%22512px%22%20%20%20viewBox%3D%220%200%20512%20512%22%20%20%20enable-background%3D%22new%200%200%20512%20512%22%20%20%20xml%3Aspace%3D%22preserve%22%20%20%20id%3D%22svg2%22%20%20%20inkscape%3Aversion%3D%220.48.4%20r9939%22%20%20%20sodipodi%3Adocname%3D%22facebook.colors-white-blue.svg%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3Ecircle%2C%20ellipse%2C%20line%2C%20path%2C%20polygon%2C%20polyline%2C%20rect%2C%20text%20%7B%20fill%3A%20white%20!important%3B%20%7D%3C%2Fstyle%3E%3Cmetadata%20%20%20id%3D%22metadata9%22%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20%20%20%20%20%20%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20%20%20%20%20%20%20%20%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%20%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cdefs%20%20%20id%3D%22defs7%22%20%2F%3E%3Csodipodi%3Anamedview%20%20%20pagecolor%3D%22%23ffffff%22%20%20%20bordercolor%3D%22%23666666%22%20%20%20borderopacity%3D%221%22%20%20%20objecttolerance%3D%2210%22%20%20%20gridtolerance%3D%2210%22%20%20%20guidetolerance%3D%2210%22%20%20%20inkscape%3Apageopacity%3D%220%22%20%20%20inkscape%3Apageshadow%3D%222%22%20%20%20inkscape%3Awindow-width%3D%22708%22%20%20%20inkscape%3Awindow-height%3D%22480%22%20%20%20id%3D%22namedview5%22%20%20%20showgrid%3D%22false%22%20%20%20inkscape%3Azoom%3D%220.4609375%22%20%20%20inkscape%3Acx%3D%22256%22%20%20%20inkscape%3Acy%3D%22256%22%20%20%20inkscape%3Awindow-x%3D%220%22%20%20%20inkscape%3Awindow-y%3D%220%22%20%20%20inkscape%3Awindow-maximized%3D%220%22%20%20%20inkscape%3Acurrent-layer%3D%22svg2%22%20%2F%3E%3Cpath%20%20%20id%3D%22facebook-square-rounded-icon%22%20%20%20d%3D%22M411.945%2C50h-312c-27.614%2C0-50%2C22.386-50%2C50v312c0%2C27.614%2C22.386%2C50%2C50%2C50h312%20%20%20c27.614%2C0%2C50-22.386%2C50-50V100C461.945%2C72.386%2C439.56%2C50%2C411.945%2C50z%20M323.688%2C160.658c0%2C0-22.893%2C0-31.988%2C0%20%20%20c-11.291%2C0-13.645%2C4.625-13.645%2C16.309c0%2C9.723%2C0%2C28.227%2C0%2C28.227h45.633l-4.391%2C49.551h-41.242v148.03h-59.111V255.372h-30.74%20%20%20v-50.178h30.74c0%2C0%2C0-7.215%2C0-39.517c0-37.087%2C19.832-56.452%2C63.818-56.452c7.205%2C0%2C40.926%2C0%2C40.926%2C0V160.658z%22%20%20%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20%2F%3E%3C%2Fsvg%3E')")
    ]),
    Declaration('.tagplay-media-twitter .tagplay-media-username:before', [
      Property('background-image', "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%22512px%22%20height%3D%22512px%22%20viewBox%3D%220%200%20512%20512%22%20enable-background%3D%22new%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3Ecircle%2C%20ellipse%2C%20line%2C%20path%2C%20polygon%2C%20polyline%2C%20rect%2C%20text%20%7B%20fill%3A%20white%20!important%3B%20%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22twitter-icon%22%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20d%3D%22M462%2C128.223c-15.158%2C6.724-31.449%2C11.269-48.547%2C13.31c17.449-10.461%2C30.854-27.025%2C37.164-46.764%20c-16.333%2C9.687-34.422%2C16.721-53.676%2C20.511c-15.418-16.428-37.386-26.691-61.698-26.691c-54.56%2C0-94.668%2C50.916-82.337%2C103.787%20c-70.25-3.524-132.534-37.177-174.223-88.314c-22.142%2C37.983-11.485%2C87.691%2C26.158%2C112.85c-13.854-0.438-26.891-4.241-38.285-10.574%20c-0.917%2C39.162%2C27.146%2C75.781%2C67.795%2C83.949c-11.896%2C3.237-24.926%2C3.978-38.17%2C1.447c10.754%2C33.58%2C41.972%2C58.018%2C78.96%2C58.699%20C139.604%2C378.282%2C94.846%2C390.721%2C50%2C385.436c37.406%2C23.982%2C81.837%2C37.977%2C129.571%2C37.977c156.932%2C0%2C245.595-132.551%2C240.251-251.435%20C436.339%2C160.061%2C450.668%2C145.174%2C462%2C128.223z%22%2F%3E%3C%2Fsvg%3E')")
    ]),
    Declaration('.tagplay-media-instagram .tagplay-media-username:before', [
      Property('background-image', "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%22512px%22%20height%3D%22512px%22%20viewBox%3D%220%200%20512%20512%22%20enable-background%3D%22new%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3Ecircle%2C%20ellipse%2C%20line%2C%20path%2C%20polygon%2C%20polyline%2C%20rect%2C%20text%20%7B%20fill%3A%20white%20!important%3B%20%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22instagram-6-icon%22%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M414.474%2C224.292h-35.869%20c2.613%2C10.145%2C4.156%2C20.744%2C4.156%2C31.699c0%2C70.023-56.752%2C126.773-126.761%2C126.773s-126.763-56.75-126.763-126.773%20c0-10.955%2C1.549-21.555%2C4.162-31.699H97.53V398.61c0%2C8.742%2C7.096%2C15.832%2C15.86%2C15.832h285.219c8.766%2C0%2C15.864-7.09%2C15.864-15.832%20V224.292z%20M414.474%2C113.378c0-8.75-7.099-15.846-15.864-15.846h-47.526c-8.756%2C0-15.846%2C7.096-15.846%2C15.846v47.545%20c0%2C8.744%2C7.09%2C15.846%2C15.846%2C15.846h47.526c8.766%2C0%2C15.864-7.102%2C15.864-15.846V113.378z%20M256%2C176.769%20c-43.763%2C0-79.233%2C35.463-79.233%2C79.223c0%2C43.756%2C35.471%2C79.24%2C79.233%2C79.24c43.759%2C0%2C79.237-35.484%2C79.237-79.24%20C335.237%2C212.231%2C299.759%2C176.769%2C256%2C176.769%20M414.474%2C461.999H97.53c-26.246%2C0-47.53-21.289-47.53-47.557V97.532%20c0-26.254%2C21.284-47.531%2C47.53-47.531h316.943c26.25%2C0%2C47.526%2C21.277%2C47.526%2C47.531v316.91%20C462%2C440.71%2C440.724%2C461.999%2C414.474%2C461.999%22%2F%3E%3C%2Fsvg%3E')")]
    )
  ])
};

var lightboxOnlyStyles = {
  'style-1': Stylesheet([
    Declaration('.tagplay-media + .tagplay-media-text', [
      Property('max-height', 'none')
    ])
  ])
};

function generateCSS (selectorPrefix, config, responsive) {
  var style = config.style || 'minimal';
  var spacing = config.spacing !== undefined ? config.spacing : 10;
  var lesserSpacing = Math.floor(spacing / 2);
  var greaterSpacing = Math.ceil(spacing / 2);

  if (responsive === undefined) responsive = true;

  var css = baseCSS;
  if (style !== 'minimal') {
    var ss = styles[style];
    if (ss) css = css.concat(ss.prefix(selectorPrefix));
    var lightboxStyles = lightboxOnlyStyles[style];
    if (lightboxStyles) {
      css = css.concat(lightboxStyles.prefix(selectorPrefix.split(',').filter(function (prefix) {
        return prefix.indexOf('.tagplay-lightbox') !== -1;
      }).join(',')));
    }
  }

  var widgetProperties = [];

  if (config.text_color) {
    widgetProperties.push(Property('color', config.text_color));
  }
  if (config.background_color) {
    widgetProperties.push(Property('background-color', config.background_color));
  }
  widgetProperties.push(Property('padding', Math.max(10 - lesserSpacing, greaterSpacing) + 'px', Math.max(10 - greaterSpacing, lesserSpacing) + 'px', Math.max(10 - greaterSpacing, lesserSpacing) + 'px', Math.max(10 - lesserSpacing, greaterSpacing) + 'px'));

  css.add(Declaration(selectorPrefix, widgetProperties));

  if (responsive || config.type === 'waterfall') {
    css.add(Declaration('.tagplay-media-container, .tagplay-waterfall-column', [
      Property('width', '100%')
    ]).prefix(selectorPrefix));
  }
  css.add(Declaration(config.type === 'waterfall' ? '.tagplay-waterfall-column' : '.tagplay-media-container', [
    Property('width', 100 / config.cols + '%')
  ], responsive ? 'min-width:768px' : undefined).prefix(selectorPrefix.split(',').filter(function (prefix) {
    return prefix.indexOf('.tagplay-lightbox') === -1;
  }).join(',')));

  css.add(Declaration('.tagplay-media-inner', [
    Property('margin', [lesserSpacing + 'px', greaterSpacing + 'px', greaterSpacing + 'px', lesserSpacing + 'px'])
  ]).prefix(selectorPrefix));

  return css.toString();
}

function Stylesheet (declarations) {
  if (!(this instanceof Stylesheet)) {
    // Always call as constructor
    return new Stylesheet(declarations);
  }
  this.declarations = declarations || [];

  return this;
}

Stylesheet.prototype.add = function (declaration) {
  this.declarations.push(declaration);
};

Stylesheet.prototype.concat = function (other) {
  return new Stylesheet(this.declarations.concat(other.declarations));
};

Stylesheet.prototype.toString = function () {
  return this.declarations.map(function (declaration) {
    return declaration.toString();
  }).join('\n');
};

Stylesheet.prototype.prefix = function (prefix) {
  return new Stylesheet(this.declarations.map(function (declaration) {
    return declaration.prefix(prefix);
  }));
};

function Directive (directive, declarations) {
  if (!(this instanceof Directive)) {
    // Always call as constructor
    return new Directive(directive, declarations);
  }
  this.directive = directive;
  this.declarations = declarations;

  return this;
}

Directive.prototype.prefix = function (prefix) {
  // We never actually want to prefix directives, so this is a no-op
  return this;
};

Directive.prototype.toString = function () {
  return '@' + this.directive + ' {' + this.declarations.map(function (declaration) { return declaration.toString(); }).join('\n') + '}';
};

function Declaration (selector, properties, mediaQuery) {
  if (!(this instanceof Declaration)) {
    // Always call as constructor
    return new Declaration(selector, properties, mediaQuery);
  }
  this.selector = selector;
  this.properties = properties;
  this.mediaQuery = mediaQuery;

  return this;
}

Declaration.prototype.prefix = function (prefix) {
  return new Declaration(this.selector.split(',').map(function (selector) {
    return prefix.split(',').map(function (pre) {
      return pre + ' ' + selector;
    }).join(',');
  }).join(','), this.properties, this.mediaQuery);
};

Declaration.prototype.toString = function () {
  var declaration = this.selector + ' {' + this.properties.map(function (property) { return property.toString(); }).join('; ') + '}';

  if (this.mediaQuery) {
    return '@media(' + this.mediaQuery + ') {' + declaration + '}';
  } else {
    return declaration;
  }
};

function Property (property, value) {
  if (!(this instanceof Property)) {
    // Always call as constructor
    return new Property(property, value);
  }
  this.property = property;
  this.value = value;
}

Property.prototype.toString = function () {
  var value = this.value;
  if (Object.prototype.toString.call(value) === '[object Array]') {
    value = value.join(' ');
  }
  return this.property + ': ' + value;
};
