'use strict';

module.exports = {
    generateCSS: generateCSS,
    styles: ['minimal', 'style-1']
};

var baseCSS = Stylesheet([
  Declaration(".tagplay-widget a img", [
    Property("border", "none")
  ]),
  Declaration(".tagplay-media-container", [
    Property("display", "inline-block"),
    Property("vertical-align", "top"),
  ]),
  Declaration(".tagplay-media-object, .tagplay-media-object img", [
    Property("width", "100%"),
    Property("display", "block")
  ]),
  Declaration(".tagplay-media-text, .tagplay-media-username, .tagplay-media-date", [
    Property("margin", 0)
  ]),
  Declaration(".tagplay-like, .tagplay-flag", [
    Property("cursor", "pointer")
  ]),
  Declaration(".tagplay-flag", [
    Property("float", "right")
  ]),
  Declaration(".tagplay-like.reversed, .tagplay-flag.reversed", [
    Property("color", "#080"),
  ])
]);

var styles = {
  'style-1': Stylesheet([
    Declaration("", [
      Property("font-family", "helvetica, verdana, sans-serif"),
      Property("color", "#34495E")
    ]),
    Declaration(".tagplay-media-inner", [
      Property("background", "#FFF"),
      Property("border-radius", "4px"),
      Property("padding", "5px"),
      Property("position", "relative")
    ]),
    Declaration(".tagplay-media-username", [
      Property("font-size", "12px"),
      Property("text-align", "right"),
      Property("color", "#FFF"),
      Property("background-color", "#34495E"),
      Property("padding", "3px 9px"),
      Property("position", "absolute"),
      Property("z-index", 2),
      Property("top", "12px"),
      Property("right", "-10px"),
      Property("left", "auto"),
      Property("width", "auto"),
      Property("border", "1px solid transparent"),
      Property("border-radius", "2px 2px 0 2px"),
    ]),
    Declaration(".tagplay-media-username:after", [
      Property("display", "block"),
      Property("height", "0px"),
      Property("position", "absolute"),
      Property("bottom", "-11px"),
      Property("right", "-1px"),
      Property("content", "''"),
      Property("border-bottom", "10px solid transparent"),
      Property("border-left", "10px solid #0B131B")
    ]),
    Declaration(".tagplay-media-text", [
      Property("font-size", "22px"),
      Property("font-weight", "bold"),
      Property("padding", "40px 15px 25px"),
      Property("overflow", "auto"),
      Property("text-align", "left")
    ]),
    Declaration(".tagplay-media + .tagplay-media-text", [
      Property("margin-top", "5px"),
      Property("padding", "10px"),
      Property("background-color", "#F6F6F6"),
      Property("border-radius", "4px"),
      Property("position", "relative"),
      Property("max-height", "60px"),
      Property("overflow", "hidden"),
      Property("text-overflow", "ellipsis"),
      Property("font-size", "16px"),
      Property("line-height", "23px"),
      Property("font-weight", "normal")
    ]),
    Declaration(".tagplay-media-date", [
      Property("text-align", "right"),
      Property("font-size", "12px"),
      Property("font-weight", "normal"),
      Property("font-style", "italic"),
      Property("line-height", "23px"),
      Property("margin-top", "5px"),
      Property("padding", "0 5px")
    ]),
    Declaration(".tagplay-media-object", [
      Property("border-radius", "3px")
    ]),
    Declaration(".tagplay-media-username:before", [
      Property("content", "''"),
      Property("display", "inline-block"),
      Property("height", "1.4em"),
      Property("width", "1.4em"),
      Property("background-position", "center center"),
      Property("background-repeat", "no-repeat"),
      Property("background-size", "contain"),
      Property("vertical-align", "top"),
      Property("margin-right", "3px")
    ]),
    Declaration(".tagplay-media-email .tagplay-media-username:before", [
      Property("background-image", "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%22512px%22%20height%3D%22512px%22%20viewBox%3D%220%200%20512%20512%22%20enable-background%3D%22new%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3Ecircle%2C%20ellipse%2C%20line%2C%20path%2C%20polygon%2C%20polyline%2C%20rect%2C%20text%20%7B%20fill%3A%20white%20!important%3B%20%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22email-11-icon%22%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20d%3D%22M373.945%2C148.019c-2.779%2C9.269-11.122%2C37.539-13.439%2C47.735l-27.807%2C102.884%20c-1.39%2C5.097-1.854%2C9.732-1.854%2C13.903c0%2C7.414%2C4.171%2C11.586%2C12.05%2C11.586c8.806%2C0%2C19.928-4.636%2C29.196-12.05%20c22.709-17.61%2C37.538-51.906%2C37.538-87.591c0-42.636-19.928-79.713-53.295-100.566c-20.854-12.514-50.051-19.465-82.956-19.465%20c-97.785%2C0-166.375%2C64.882-166.375%2C156.644c0%2C88.981%2C61.638%2C147.374%2C154.789%2C147.374c24.1%2C0%2C49.588-3.707%2C70.906-10.196%20c18.074-5.561%2C29.66-11.122%2C51.906-24.562l28.271%2C40.782c-25.027%2C14.831-36.149%2C20.393-57.932%2C26.879%20c-31.514%2C9.734-64.881%2C14.831-98.248%2C14.831c-65.346%2C0-116.326-18.538-152.937-55.149C69.001%2C366.763%2C50%2C317.638%2C50%2C263.879%20c0-57.467%2C19.466-107.056%2C56.54-144.595c42.637-42.636%2C98.714-63.491%2C170.546-63.491C385.069%2C55.793%2C462%2C125.31%2C462%2C222.169%20c0%2C43.563-15.757%2C83.419-44.027%2C111.689c-24.1%2C24.1-55.613%2C38.003-86.663%2C38.003c-18.074%2C0-32.904-6.952-39.856-18.074%20c-2.317-3.707-2.781-6.025-4.171-14.367c-17.611%2C20.392-36.149%2C29.196-62.1%2C29.196c-45.882%2C0-75.078-34.294-75.078-87.127%20c0-78.321%2C51.441-143.202%2C113.078-143.202c25.953%2C0%2C38.931%2C6.486%2C51.442%2C25.953l4.635-16.222H373.945z%20M278.478%2C285.66%20c11.122-21.781%2C18.536-50.051%2C18.536-71.37c0-19-10.657-31.976-26.878-31.976c-17.611%2C0-33.832%2C11.586-45.418%2C33.367%20c-11.123%2C20.854-18.538%2C48.197-18.538%2C69.515c0%2C24.563%2C9.269%2C37.539%2C26.881%2C37.539C250.207%2C322.735%2C266.428%2C309.296%2C278.478%2C285.66z%20%22%2F%3E%3C%2Fsvg%3E')")
    ]),
    Declaration(".tagplay-media-facebook .tagplay-media-username:before", [
      Property("background-image", "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20%20%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20%20%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20%20%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20%20%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22%20%20%20xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22%20%20%20version%3D%221.1%22%20%20%20x%3D%220px%22%20%20%20y%3D%220px%22%20%20%20width%3D%22512px%22%20%20%20height%3D%22512px%22%20%20%20viewBox%3D%220%200%20512%20512%22%20%20%20enable-background%3D%22new%200%200%20512%20512%22%20%20%20xml%3Aspace%3D%22preserve%22%20%20%20id%3D%22svg2%22%20%20%20inkscape%3Aversion%3D%220.48.4%20r9939%22%20%20%20sodipodi%3Adocname%3D%22facebook.colors-white-blue.svg%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3Ecircle%2C%20ellipse%2C%20line%2C%20path%2C%20polygon%2C%20polyline%2C%20rect%2C%20text%20%7B%20fill%3A%20white%20!important%3B%20%7D%3C%2Fstyle%3E%3Cmetadata%20%20%20id%3D%22metadata9%22%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20%20%20%20%20%20%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20%20%20%20%20%20%20%20%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%20%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cdefs%20%20%20id%3D%22defs7%22%20%2F%3E%3Csodipodi%3Anamedview%20%20%20pagecolor%3D%22%23ffffff%22%20%20%20bordercolor%3D%22%23666666%22%20%20%20borderopacity%3D%221%22%20%20%20objecttolerance%3D%2210%22%20%20%20gridtolerance%3D%2210%22%20%20%20guidetolerance%3D%2210%22%20%20%20inkscape%3Apageopacity%3D%220%22%20%20%20inkscape%3Apageshadow%3D%222%22%20%20%20inkscape%3Awindow-width%3D%22708%22%20%20%20inkscape%3Awindow-height%3D%22480%22%20%20%20id%3D%22namedview5%22%20%20%20showgrid%3D%22false%22%20%20%20inkscape%3Azoom%3D%220.4609375%22%20%20%20inkscape%3Acx%3D%22256%22%20%20%20inkscape%3Acy%3D%22256%22%20%20%20inkscape%3Awindow-x%3D%220%22%20%20%20inkscape%3Awindow-y%3D%220%22%20%20%20inkscape%3Awindow-maximized%3D%220%22%20%20%20inkscape%3Acurrent-layer%3D%22svg2%22%20%2F%3E%3Cpath%20%20%20id%3D%22facebook-square-rounded-icon%22%20%20%20d%3D%22M411.945%2C50h-312c-27.614%2C0-50%2C22.386-50%2C50v312c0%2C27.614%2C22.386%2C50%2C50%2C50h312%20%20%20c27.614%2C0%2C50-22.386%2C50-50V100C461.945%2C72.386%2C439.56%2C50%2C411.945%2C50z%20M323.688%2C160.658c0%2C0-22.893%2C0-31.988%2C0%20%20%20c-11.291%2C0-13.645%2C4.625-13.645%2C16.309c0%2C9.723%2C0%2C28.227%2C0%2C28.227h45.633l-4.391%2C49.551h-41.242v148.03h-59.111V255.372h-30.74%20%20%20v-50.178h30.74c0%2C0%2C0-7.215%2C0-39.517c0-37.087%2C19.832-56.452%2C63.818-56.452c7.205%2C0%2C40.926%2C0%2C40.926%2C0V160.658z%22%20%20%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20%2F%3E%3C%2Fsvg%3E')")
    ]),
    Declaration(".tagplay-media-twitter .tagplay-media-username:before", [
      Property("background-image", "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%22512px%22%20height%3D%22512px%22%20viewBox%3D%220%200%20512%20512%22%20enable-background%3D%22new%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3Ecircle%2C%20ellipse%2C%20line%2C%20path%2C%20polygon%2C%20polyline%2C%20rect%2C%20text%20%7B%20fill%3A%20white%20!important%3B%20%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22twitter-icon%22%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20d%3D%22M462%2C128.223c-15.158%2C6.724-31.449%2C11.269-48.547%2C13.31c17.449-10.461%2C30.854-27.025%2C37.164-46.764%20c-16.333%2C9.687-34.422%2C16.721-53.676%2C20.511c-15.418-16.428-37.386-26.691-61.698-26.691c-54.56%2C0-94.668%2C50.916-82.337%2C103.787%20c-70.25-3.524-132.534-37.177-174.223-88.314c-22.142%2C37.983-11.485%2C87.691%2C26.158%2C112.85c-13.854-0.438-26.891-4.241-38.285-10.574%20c-0.917%2C39.162%2C27.146%2C75.781%2C67.795%2C83.949c-11.896%2C3.237-24.926%2C3.978-38.17%2C1.447c10.754%2C33.58%2C41.972%2C58.018%2C78.96%2C58.699%20C139.604%2C378.282%2C94.846%2C390.721%2C50%2C385.436c37.406%2C23.982%2C81.837%2C37.977%2C129.571%2C37.977c156.932%2C0%2C245.595-132.551%2C240.251-251.435%20C436.339%2C160.061%2C450.668%2C145.174%2C462%2C128.223z%22%2F%3E%3C%2Fsvg%3E')")
    ]),
    Declaration(".tagplay-media-instagram .tagplay-media-username:before", [
      Property("background-image", "url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%22512px%22%20height%3D%22512px%22%20viewBox%3D%220%200%20512%20512%22%20enable-background%3D%22new%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3Ecircle%2C%20ellipse%2C%20line%2C%20path%2C%20polygon%2C%20polyline%2C%20rect%2C%20text%20%7B%20fill%3A%20white%20!important%3B%20%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22instagram-6-icon%22%20style%3D%22fill%3A%23bdc3c7%3Bfill-opacity%3A1%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M414.474%2C224.292h-35.869%20c2.613%2C10.145%2C4.156%2C20.744%2C4.156%2C31.699c0%2C70.023-56.752%2C126.773-126.761%2C126.773s-126.763-56.75-126.763-126.773%20c0-10.955%2C1.549-21.555%2C4.162-31.699H97.53V398.61c0%2C8.742%2C7.096%2C15.832%2C15.86%2C15.832h285.219c8.766%2C0%2C15.864-7.09%2C15.864-15.832%20V224.292z%20M414.474%2C113.378c0-8.75-7.099-15.846-15.864-15.846h-47.526c-8.756%2C0-15.846%2C7.096-15.846%2C15.846v47.545%20c0%2C8.744%2C7.09%2C15.846%2C15.846%2C15.846h47.526c8.766%2C0%2C15.864-7.102%2C15.864-15.846V113.378z%20M256%2C176.769%20c-43.763%2C0-79.233%2C35.463-79.233%2C79.223c0%2C43.756%2C35.471%2C79.24%2C79.233%2C79.24c43.759%2C0%2C79.237-35.484%2C79.237-79.24%20C335.237%2C212.231%2C299.759%2C176.769%2C256%2C176.769%20M414.474%2C461.999H97.53c-26.246%2C0-47.53-21.289-47.53-47.557V97.532%20c0-26.254%2C21.284-47.531%2C47.53-47.531h316.943c26.25%2C0%2C47.526%2C21.277%2C47.526%2C47.531v316.91%20C462%2C440.71%2C440.724%2C461.999%2C414.474%2C461.999%22%2F%3E%3C%2Fsvg%3E')")]
    )
  ])
};

function generateCSS(widgetName, config) {
  var selectorPrefix = ".tagplay-widget-" + widgetName + " ";
  var style = config.style;
  var lesserSpacing = Math.floor(config.spacing / 2);
  var greaterSpacing = Math.ceil(config.spacing / 2);

  var css = baseCSS;
  if (style !== 'minimal') {
    css = css.concat(styles[style].prefix(selectorPrefix));
  }

  var widgetProperties = [];

  if (config.text_color) {
    widgetProperties.push(Property("color", config.text_color));
  }
  if (config.background_color) {
    widgetProperties.push(Property("background-color", config.background_color));
  }
  widgetProperties.push(Property("margin", [-lesserSpacing + "px", -greaterSpacing + "px", -greaterSpacing + "px", -lesserSpacing + "px"]));

  css.add(Declaration(selectorPrefix, widgetProperties));
  css.add(Declaration(selectorPrefix + ".tagplay-media-container", [
    Property("width", 100 / config.cols + "%")
  ], "min-width:768px"));
  css.add(Declaration(selectorPrefix + ".tagplay-media-inner", [
    Property("margin", [lesserSpacing + "px", greaterSpacing + "px", greaterSpacing + "px", lesserSpacing + "px"])
  ]));

  return css.toString();
}


function Stylesheet(declarations) {
  if (!(this instanceof Stylesheet)) {
    // Always call as constructor
    return new Stylesheet(declarations);
  }
  this.declarations = declarations || [];

  return this;
}

Stylesheet.prototype.add = function(declaration) {
  this.declarations.push(declaration);
};

Stylesheet.prototype.concat = function(other) {
  return new Stylesheet(this.declarations.concat(other.declarations));
};

Stylesheet.prototype.toString = function() {
  return this.declarations.map(function(declaration) {
      return declaration.toString();
  }).join('\n');
};

Stylesheet.prototype.prefix = function(prefix) {
  return new Stylesheet(this.declarations.map(function(declaration) {
    return new Declaration(declaration.selector.split(",").map(function(selector) {
      return prefix + " " + selector;
    }).join(","), declaration.properties, declaration.mediaQuery);
  }));
};

function Declaration(selector, properties, mediaQuery) {
  if (!(this instanceof Declaration)) {
    // Always call as constructor
    return new Declaration(selector, properties, mediaQuery);
  }
  this.selector = selector;
  this.properties = properties;
  this.mediaQuery = mediaQuery;

  return this;
}

Declaration.prototype.toString = function() {
  var declaration = this.selector + " {" + this.properties.map(function(property) { return property.toString(); }).join("; ") + "}";

  if (this.mediaQuery) {
    return "@media(" + this.mediaQuery + ") {" + declaration + "}";
  }
  else {
    return declaration;
  }
}

function Property(property, value) {
  if (!(this instanceof Property)) {
    // Always call as constructor
    return new Property(property, value);
  }
  this.property = property;
  this.value = value;
}

Property.prototype.toString = function() {
  var value = this.value;
  if (Object.prototype.toString.call(value) === '[object Array]') {
    value = value.join(" ");
  }
  return this.property + ": " + value;
}