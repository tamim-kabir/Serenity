﻿/**
 * Represents the utility color options for icons corresponding to Bootstrap contextual colors like primary, secondary, success etc.
 */
export type UtilityColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "muted" | "white";


/**
 * Represents the type of text color.
 * It can be one of the predefined UtilityColor values or one of the following CSS color names:
 * "aqua", "blue", "fuschia", "gray", "green", "light-blue", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "teal", "yellow".
 */
export type TextColor = UtilityColor | "aqua" | "blue" | "fuschia" | "gray" | "green" | "light-blue" | "lime" | "maroon" | "navy" | "olive" | "orange" | "purple" | "red" | "teal" | "yellow";


/**
 * Returns the CSS class name for the background color based on the provided UtilityColor.
 * @param color - The UtilityColor to generate the CSS class name for.
 * @returns The CSS class name for the background color.
 */
export function bgColor(color: UtilityColor) {
    return "bg-" + color;
}

/**
 * Returns the CSS class for the specified text color.
 * @param color - The text color.
 * @returns The CSS class for the specified text color.
 */
export function textColor(color: TextColor): string {
    return "text-" + color;
}

/**
 * Returns the CSS class for a Font Awesome icon.
 * @param key - The key of the Font Awesome icon.
 * @param color - The optional color of the icon.
 * @returns The CSS class for the icon.
 */
export function faIcon(key: faIconKey, color?: TextColor): string {
    return "fa fa-" + key + (color ? " " + textColor(color) : "");
}

/**
 * Generates a fully qualified class name for a Font Awesome brand icon.
 * @param key - The key of the Font Awesome brand icon.
 * @param color - The optional color of the icon.
 * @returns The fully qualified class name for the icon.
 */
export function fabIcon(key: fabIconKey, color?: TextColor): string {
    return "fab fa-" + key + (color ? " " + textColor(color) : "");
}

/**
 * Represents a known icon class.
 * The icon class can be either a Font Awesome icon (`fa fa-${faIconKey}`)
 * or a Font Awesome Brands icon (`fab fa-${fabIconKey}`).
 */
export type KnownIconClass = `fa fa-${faIconKey}` | `fab fa-${fabIconKey}`;

/**
 * Represents a type that can be either a known icon class or a string.
 */
export type AnyIconClass = KnownIconClass | (string & {});

/**
 * Represents the type for an icon class name.
 * It can be either a single icon class or an array of icon classes.
 */
export type IconClassName = AnyIconClass | (AnyIconClass[]);

/**
 * Returns the CSS class name for the given icon.
 * @param icon The icon class name or an array of class names.
 * @returns The CSS class name for the icon.
 */
export function iconClassName(icon: IconClassName): string {
    let klass = Array.isArray(icon) ? icon.join(" ") : icon;
    if (!klass)
        return klass;
    if (klass.startsWith('fa-') && klass.indexOf("fa ") < 0 && !klass.endsWith(" fa"))
        return 'fa ' + klass;
    return klass;
}

/*
Generated from https://icons8.com/line-awesome via following code
var c = Array.from(document.querySelectorAll('.icons__item')).map(x => x.querySelector('.icons__before i:not(.icons__arrow)').className).filter((x, i, a) => a && (a.indexOf(x) === i));
[false, true].map(b => { var l = 0; var a = c.filter(x => !!x.startsWith("fab ") == b).map(x => '"' + x.replace("fas fa-", "").replace("fab fa-", "") + '"').sort()
    .map((x)=>{if (l + x.length > 120) { l = 0; x = x + '\n' } l += x.length; return x}); 
     var t = (b && "fab") || "fa"; return `export type ${t}Icon =\n${a.join('|')};` }).join('\n\n');
*/
export type faIconKey =
    "ad" | "address-book" | "address-card" | "adjust" | "air-freshener" | "align-center" | "align-justify" | "align-left" | "align-right" | "allergies" | "ambulance"
    | "american-sign-language-interpreting" | "anchor" | "angle-double-down" | "angle-double-left" | "angle-double-right" | "angle-double-up"
    | "angle-down" | "angle-left" | "angle-right" | "angle-up" | "angry" | "ankh" | "apple-alt" | "archive" | "archway" | "arrow-alt-circle-down"
    | "arrow-alt-circle-left" | "arrow-alt-circle-right" | "arrow-alt-circle-up" | "arrow-circle-down" | "arrow-circle-left"
    | "arrow-circle-right" | "arrow-circle-up" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "arrows-alt" | "arrows-alt-h"
    | "arrows-alt-v" | "assistive-listening-systems" | "asterisk" | "at" | "atlas" | "atom" | "audio-description" | "award" | "baby" | "baby-carriage"
    | "backspace" | "backward" | "bacon" | "balance-scale" | "balance-scale-left" | "balance-scale-right" | "ban" | "band-aid" | "barcode"
    | "bars" | "baseball-ball" | "basketball-ball" | "bath" | "battery-empty" | "battery-full" | "battery-half" | "battery-quarter" | "battery-three-quarters"
    | "bed" | "beer" | "bell" | "bell-o" | "bell-slash" | "bezier-curve" | "bible" | "bicycle" | "biking" | "binoculars" | "biohazard" | "birthday-cake"
    | "blender" | "blender-phone" | "blind" | "blog" | "bold" | "bolt" | "bomb" | "bone" | "bong" | "book" | "book-dead" | "book-medical" | "book-open"
    | "book-reader" | "bookmark" | "border-all" | "border-none" | "border-style" | "bowling-ball" | "box" | "box-open" | "boxes" | "braille" | "brain"
    | "bread-slice" | "briefcase" | "briefcase-medical" | "broadcast-tower" | "broom" | "brush" | "bug" | "building" | "bullhorn" | "bullseye" | "burn"
    | "bus" | "bus-alt" | "business-time" | "calculator" | "calendar" | "calendar-alt" | "calendar-check" | "calendar-day" | "calendar-minus" | "calendar-plus"
    | "calendar-times" | "calendar-week" | "camera" | "camera-retro" | "campground" | "candy-cane" | "cannabis" | "capsules" | "car" | "car-alt"
    | "car-battery" | "car-crash" | "car-side" | "caret-down" | "caret-left" | "caret-right" | "caret-square-down" | "caret-square-left" | "caret-square-right"
    | "caret-square-up" | "caret-up" | "carrot" | "cart-arrow-down" | "cart-plus" | "cash-register" | "cat" | "certificate" | "chair"
    | "chalkboard" | "chalkboard-teacher" | "charging-station" | "chart-area" | "chart-bar" | "chart-line" | "chart-pie" | "check" | "check-circle"
    | "check-double" | "check-square" | "cheese" | "chess" | "chess-bishop" | "chess-board" | "chess-king" | "chess-knight" | "chess-pawn"
    | "chess-queen" | "chess-rook" | "chevron-circle-down" | "chevron-circle-left" | "chevron-circle-right" | "chevron-circle-up"
    | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "child" | "church" | "circle" | "circle-notch" | "city" | "clinic-medical"
    | "clipboard" | "clipboard-check" | "clipboard-list" | "clock" | "clock-o" | "clone" | "closed-captioning" | "cloud" | "cloud-download-alt"
    | "cloud-meatball" | "cloud-moon" | "cloud-moon-rain" | "cloud-rain" | "cloud-showers-heavy" | "cloud-sun" | "cloud-sun-rain"
    | "cloud-upload-alt" | "cocktail" | "code" | "code-branch" | "coffee" | "cog" | "cogs" | "coins" | "columns" | "comment" | "comment-alt"
    | "comment-dollar" | "comment-dots" | "comment-medical" | "comment-slash" | "comments" | "comments-dollar" | "compact-disc" | "compass"
    | "compress" | "compress-arrows-alt" | "concierge-bell" | "cookie" | "cookie-bite" | "copy" | "copyright" | "couch" | "credit-card" | "crop"
    | "crop-alt" | "cross" | "crosshairs" | "crow" | "crown" | "crutch" | "cube" | "cubes" | "cut" | "database" | "deaf" | "democrat" | "desktop" | "dharmachakra"
    | "diagnoses" | "dice" | "dice-d20" | "dice-d6" | "dice-five" | "dice-four" | "dice-one" | "dice-six" | "dice-three" | "dice-two" | "digital-tachograph"
    | "directions" | "divide" | "dizzy" | "dna" | "dog" | "dollar-sign" | "dolly" | "dolly-flatbed" | "donate" | "door-closed" | "door-open"
    | "dot-circle" | "dove" | "download" | "drafting-compass" | "dragon" | "draw-polygon" | "drum" | "drum-steelpan" | "drumstick-bite" | "dumbbell"
    | "dumpster" | "dumpster-fire" | "dungeon" | "edit" | "egg" | "eject" | "ellipsis-h" | "ellipsis-v" | "envelope" | "envelope-o" | "envelope-open" | "envelope-open-text"
    | "envelope-square" | "equals" | "eraser" | "ethernet" | "euro-sign" | "exchange-alt" | "exclamation" | "exclamation-circle"
    | "exclamation-triangle" | "expand" | "expand-arrows-alt" | "external-link-alt" | "external-link-square-alt" | "eye" | "eye-dropper"
    | "eye-slash" | "fan" | "fast-backward" | "fast-forward" | "fax" | "feather" | "feather-alt" | "female" | "fighter-jet" | "file" | "file-alt" | "file-archive"
    | "file-audio" | "file-code" | "file-contract" | "file-csv" | "file-download" | "file-excel" | "file-excel-o" | "file-export" | "file-image" | "file-import" 
    | "file-invoice" | "file-invoice-dollar" | "file-medical" | "file-medical-alt" | "file-pdf" | "file-pdf-o" | "file-powerpoint" | "file-prescription"
    | "file-signature" | "file-upload" | "file-text" | "file-text-o" | "file-video" | "file-word" | "fill" | "fill-drip" | "film" | "filter" | "fingerprint" | "fire" 
    | "floppy-o" | "fire-alt" | "fire-extinguisher" | "first-aid" | "fish" | "fist-raised" | "flag" | "flag-checkered" | "flag-usa" | "flask" | "flushed" | "folder"
    | "folder-minus" | "folder-open" | "folder-open-o" | "folder-plus" | "font" | "football-ball" | "forward" | "frog" | "frown" | "frown-open" | "funnel-dollar" | "futbol"
    | "gamepad" | "gas-pump" | "gavel" | "gem" | "genderless" | "ghost" | "gift" | "gifts" | "glass-cheers" | "glass-martini" | "glass-martini-alt" | "glass-whiskey"
    | "glasses" | "globe" | "globe-africa" | "globe-americas" | "globe-asia" | "globe-europe" | "golf-ball" | "gopuram" | "graduation-cap"
    | "greater-than" | "greater-than-equal" | "grimace" | "grin" | "grin-alt" | "grin-beam" | "grin-beam-sweat" | "grin-hearts" | "grin-squint"
    | "grin-squint-tears" | "grin-stars" | "grin-tears" | "grin-tongue" | "grin-tongue-squint" | "grin-tongue-wink" | "grin-wink" | "grip-horizontal"
    | "grip-lines" | "grip-lines-vertical" | "grip-vertical" | "guitar" | "h-square" | "hamburger" | "hammer" | "hamsa" | "hand-holding"
    | "hand-holding-heart" | "hand-holding-usd" | "hand-lizard" | "hand-middle-finger" | "hand-paper" | "hand-peace" | "hand-point-down"
    | "hand-point-left" | "hand-point-right" | "hand-point-up" | "hand-pointer" | "hand-rock" | "hand-scissors" | "hand-spock" | "hands"
    | "hands-helping" | "handshake" | "hanukiah" | "hard-hat" | "hashtag" | "hat-cowboy" | "hat-cowboy-side" | "hat-wizard" | "haykal" | "hdd" | "heading"
    | "headphones" | "headphones-alt" | "headset" | "heart" | "heart-broken" | "heartbeat" | "helicopter" | "highlighter" | "hiking" | "hippo" | "history"
    | "hockey-puck" | "holly-berry" | "home" | "horse" | "horse-head" | "hospital" | "hospital-alt" | "hospital-symbol" | "hot-tub" | "hotdog" | "hotel"
    | "hourglass" | "hourglass-end" | "hourglass-half" | "hourglass-start" | "house-damage" | "hryvnia" | "i-cursor" | "ice-cream" | "icicles" | "icons"
    | "id-badge" | "id-card" | "id-card-alt" | "igloo" | "image" | "images" | "inbox" | "indent" | "industry" | "infinity" | "info" | "info-circle" | "italic"
    | "jedi" | "joint" | "journal-whills" | "kaaba" | "key" | "keyboard" | "khanda" | "kiss" | "kiss-beam" | "kiss-wink-heart" | "kiwi-bird" | "landmark"
    | "language" | "laptop" | "laptop-code" | "laptop-medical" | "laugh" | "laugh-beam" | "laugh-squint" | "laugh-wink" | "layer-group" | "leaf"
    | "lemon" | "less-than" | "less-than-equal" | "level-down-alt" | "level-up-alt" | "life-ring" | "lightbulb" | "link" | "lira-sign" | "list" | "list-alt"
    | "list-ol" | "list-ul" | "location-arrow" | "lock" | "lock-open" | "long-arrow-alt-down" | "long-arrow-alt-left" | "long-arrow-alt-right" | "long-arrow-alt-up"
    | "low-vision" | "luggage-cart" | "magic" | "magnet" | "mail-bulk" | "mail-forward" | "mail-reply" | "male" | "map" | "map-marked" | "map-marked-alt"
    | "map-marker" | "map-marker-alt" | "map-pin" | "map-signs" | "marker" | "mars" | "mars-double" | "mars-stroke" | "mars-stroke-h" | "mars-stroke-v"
    | "mask" | "medal" | "medkit" | "meh" | "meh-blank" | "meh-rolling-eyes" | "memory" | "menorah" | "mercury" | "meteor" | "microchip" | "microphone"
    | "microphone-alt" | "microphone-alt-slash" | "microphone-slash" | "microscope" | "minus" | "minus-circle" | "minus-square" | "mitten"
    | "mobile" | "mobile-alt" | "money-bill" | "money-bill-alt" | "money-bill-wave" | "money-bill-wave-alt" | "money-check" | "money-check-alt"
    | "monument" | "moon" | "mortar-pestle" | "mosque" | "motorcycle" | "mountain" | "mouse" | "mouse-pointer" | "mug-hot" | "music" | "network-wired"
    | "neuter" | "newspaper" | "not-equal" | "notes-medical" | "object-group" | "object-ungroup" | "oil-can" | "om" | "otter" | "outdent" | "pager"
    | "paint-brush" | "paint-roller" | "palette" | "pallet" | "paper-plane" | "paperclip" | "parachute-box" | "paragraph" | "parking" | "passport"
    | "pastafarianism" | "paste" | "pause" | "pause-circle" | "paw" | "peace" | "pen" | "pen-alt" | "pen-fancy" | "pen-nib" | "pen-square" | "pencil-alt"
    | "pencil-ruler" | "pencil-square-o" | "people-carry" | "pepper-hot" | "percent" | "percentage" | "person-booth" | "phone" | "phone-alt" | "phone-slash" | "phone-square"
    | "phone-square-alt" | "phone-volume" | "photo-video" | "piggy-bank" | "pills" | "pizza-slice" | "place-of-worship" | "plane" | "plane-arrival"
    | "plane-departure" | "play" | "play-circle" | "plug" | "plus" | "plus-circle" | "plus-square" | "podcast" | "poll" | "poll-h" | "poo" | "poo-storm"
    | "poop" | "portrait" | "pound-sign" | "power-off" | "pray" | "praying-hands" | "prescription" | "prescription-bottle" | "prescription-bottle-alt"
    | "print" | "procedures" | "project-diagram" | "puzzle-piece" | "qrcode" | "question" | "question-circle" | "quidditch" | "quote-left"
    | "quote-right" | "quran" | "radiation" | "radiation-alt" | "rainbow" | "random" | "receipt" | "record-vinyl" | "recycle" | "redo" | "refresh"
    | "redo-alt" | "registered" | "remove-format" | "reply" | "reply-all" | "republican" | "restroom" | "retweet" | "ribbon" | "ring" | "road" | "robot" | "rocket"
    | "route" | "rss" | "rss-square" | "ruble-sign" | "ruler" | "ruler-combined" | "ruler-horizontal" | "ruler-vertical" | "running" | "rupee-sign"
    | "sad-cry" | "sad-tear" | "satellite" | "satellite-dish" | "save" | "school" | "screwdriver" | "scroll" | "sd-card" | "search" | "search-dollar"
    | "search-location" | "search-minus" | "search-plus" | "seedling" | "server" | "shapes" | "share" | "share-alt" | "share-alt-square"
    | "share-square" | "shekel-sign" | "shield-alt" | "ship" | "shipping-fast" | "shoe-prints" | "shopping-bag" | "shopping-basket"
    | "shopping-cart" | "shower" | "shuttle-van" | "sign" | "sign-in-alt" | "sign-language" | "sign-out" | "sign-out-alt" | "signal" | "signature"
    | "sim-card" | "sitemap" | "skating" | "skiing" | "skiing-nordic" | "skull" | "skull-crossbones" | "slash" | "sleigh" | "sliders-h" | "smile"
    | "smile-beam" | "smile-wink" | "smog" | "smoking" | "smoking-ban" | "sms" | "snowboarding" | "snowflake" | "snowman" | "snowplow" | "socks" | "solar-panel"
    | "sort" | "sort-alpha-down" | "sort-alpha-down-alt" | "sort-alpha-up" | "sort-alpha-up-alt" | "sort-amount-down" | "sort-amount-down-alt"
    | "sort-amount-up" | "sort-amount-up-alt" | "sort-down" | "sort-numeric-down" | "sort-numeric-down-alt" | "sort-numeric-up"
    | "sort-numeric-up-alt" | "sort-up" | "spa" | "space-shuttle" | "spell-check" | "spider" | "spinner" | "splotch" | "spray-can" | "square"
    | "square-full" | "square-root-alt" | "stamp" | "star" | "star-and-crescent" | "star-half" | "star-half-alt" | "star-o" | "star-of-david" | "star-of-life"
    | "step-backward" | "step-forward" | "stethoscope" | "sticky-note" | "stop" | "stop-circle" | "stopwatch" | "store" | "store-alt" | "stream"
    | "street-view" | "strikethrough" | "stroopwafel" | "subscript" | "subway" | "suitcase" | "suitcase-rolling" | "sun" | "superscript" | "surprise"
    | "swatchbook" | "swimmer" | "swimming-pool" | "synagogue" | "sync" | "sync-alt" | "syringe" | "table" | "table-tennis" | "tablet" | "tablet-alt"
    | "tablets" | "tachometer-alt" | "tag" | "tags" | "tape" | "tasks" | "taxi" | "teeth" | "teeth-open" | "temperature-high" | "temperature-low"
    | "tenge" | "terminal" | "text-height" | "text-width" | "th" | "th-large" | "th-list" | "theater-masks" | "thermometer" | "thermometer-empty"
    | "thermometer-full" | "thermometer-half" | "thermometer-quarter" | "thermometer-three-quarters" | "thumbs-down" | "thumbs-up"
    | "thumbtack" | "ticket-alt" | "times" | "times-circle" | "tint" | "tint-slash" | "tired" | "toggle-off" | "toggle-on" | "toilet" | "toilet-paper"
    | "toolbox" | "tools" | "tooth" | "torah" | "torii-gate" | "tractor" | "trademark" | "traffic-light" | "train" | "tram" | "transgender" | "transgender-alt"
    | "trash" | "trash-alt" | "trash-o" | "trash-restore" | "trash-restore-alt" | "tree" | "trophy" | "truck" | "truck-loading" | "truck-monster"
    | "truck-moving" | "truck-pickup" | "tshirt" | "tty" | "tv" | "umbrella" | "umbrella-beach" | "underline" | "undo" | "undo-alt" | "universal-access"
    | "university" | "unlink" | "unlock" | "unlock-alt" | "upload" | "user" | "user-alt" | "user-alt-slash" | "user-astronaut" | "user-check"
    | "user-circle" | "user-clock" | "user-cog" | "user-edit" | "user-friends" | "user-graduate" | "user-injured" | "user-lock" | "user-md"
    | "user-minus" | "user-ninja" | "user-nurse" | "user-plus" | "user-secret" | "user-shield" | "user-slash" | "user-tag" | "user-tie" | "user-times"
    | "users" | "users-cog" | "utensil-spoon" | "utensils" | "vector-square" | "venus" | "venus-double" | "venus-mars" | "vial" | "vials" | "video"
    | "video-slash" | "vihara" | "voicemail" | "volleyball-ball" | "volume-down" | "volume-mute" | "volume-off" | "volume-up" | "vote-yea" | "vr-cardboard"
    | "walking" | "wallet" | "warehouse" | "water" | "wave-square" | "weight" | "weight-hanging" | "wheelchair" | "wifi" | "wind" | "window-close"
    | "window-maximize" | "window-minimize" | "window-restore" | "wine-bottle" | "wine-glass" | "wine-glass-alt" | "won-sign" | "wrench"
    | "x-ray" | "yen-sign" | "yin-yang";

export type fabIconKey =
    "500px" | "accessible-icon" | "accusoft" | "acquisitions-incorporated" | "adn" | "adobe" | "adversal" | "affiliatetheme" | "airbnb" | "algolia" | "alipay"
    | "amazon" | "amazon-pay" | "amilia" | "android" | "angellist" | "angrycreative" | "angular" | "app-store" | "app-store-ios" | "apper" | "apple"
    | "apple-pay" | "artstation" | "asymmetrik" | "atlassian" | "audible" | "autoprefixer" | "avianex" | "aviato" | "aws" | "bandcamp" | "battle-net"
    | "behance" | "behance-square" | "bimobject" | "bitbucket" | "bitcoin" | "bity" | "black-tie" | "blackberry" | "blogger" | "blogger-b" | "bluetooth"
    | "bluetooth-b" | "bootstrap" | "btc" | "buffer" | "buromobelexperte" | "buy-n-large" | "buysellads" | "canadian-maple-leaf" | "cc-amazon-pay"
    | "cc-amex" | "cc-apple-pay" | "cc-diners-club" | "cc-discover" | "cc-jcb" | "cc-mastercard" | "cc-paypal" | "cc-stripe" | "cc-visa"
    | "centercode" | "centos" | "chrome" | "chromecast" | "cloudscale" | "cloudsmith" | "cloudversify" | "codepen" | "codiepie" | "confluence" | "connectdevelop"
    | "contao" | "cotton-bureau" | "cpanel" | "creative-commons" | "creative-commons-by" | "creative-commons-nc" | "creative-commons-nc-eu"
    | "creative-commons-nc-jp" | "creative-commons-nd" | "creative-commons-pd" | "creative-commons-pd-alt" | "creative-commons-remix"
    | "creative-commons-sa" | "creative-commons-sampling" | "creative-commons-sampling-plus" | "creative-commons-share"
    | "creative-commons-zero" | "critical-role" | "css3" | "css3-alt" | "cuttlefish" | "d-and-d" | "d-and-d-beyond" | "dashcube"
    | "delicious" | "deploydog" | "deskpro" | "dev" | "deviantart" | "dhl" | "diaspora" | "digg" | "digital-ocean" | "discord" | "discourse" | "dochub"
    | "docker" | "draft2digital" | "dribbble" | "dribbble-square" | "dropbox" | "drupal" | "dyalog" | "earlybirds" | "ebay" | "edge" | "elementor" | "ello"
    | "ember" | "empire" | "envira" | "erlang" | "ethereum" | "etsy" | "evernote" | "expeditedssl" | "facebook" | "facebook-f" | "facebook-messenger" | "facebook-square"
    | "fantasy-flight-games" | "fedex" | "fedora" | "figma" | "firefox" | "first-order" | "first-order-alt" | "firstdraft" | "flickr"
    | "flipboard" | "fly" | "font-awesome" | "font-awesome-alt" | "font-awesome-flag" | "fonticons" | "fonticons-fi" | "fort-awesome" | "fort-awesome-alt"
    | "forumbee" | "foursquare" | "free-code-camp" | "freebsd" | "fulcrum" | "galactic-republic" | "galactic-senate" | "get-pocket"
    | "gg" | "gg-circle" | "git" | "git-alt" | "git-square" | "github" | "github-alt" | "github-square" | "gitkraken" | "gitlab" | "gitter" | "glide"
    | "glide-g" | "gofore" | "goodreads" | "goodreads-g" | "google" | "google-drive" | "google-play" | "google-plus" | "google-plus-g" | "google-plus-square"
    | "google-wallet" | "gratipay" | "grav" | "gripfire" | "grunt" | "gulp" | "hacker-news" | "hacker-news-square" | "hackerrank" | "hips"
    | "hire-a-helper" | "hooli" | "hornbill" | "hotjar" | "houzz" | "html5" | "hubspot" | "imdb" | "instagram" | "intercom" | "internet-explorer" | "invision"
    | "ioxhost" | "itch-io" | "itunes" | "itunes-note" | "java" | "jedi-order" | "jenkins" | "jira" | "joget" | "joomla" | "js" | "js-square" | "jsfiddle"
    | "kaggle" | "keybase" | "keycdn" | "kickstarter" | "kickstarter-k" | "korvue" | "laravel" | "lastfm" | "lastfm-square" | "leanpub" | "less" | "line"
    | "linkedin" | "linkedin-in" | "linode" | "linux" | "lyft" | "magento" | "mailchimp" | "mandalorian" | "markdown" | "mastodon" | "maxcdn" | "mdb" | "medapps"
    | "medium" | "medium-m" | "medrt" | "meetup" | "megaport" | "mendeley" | "microsoft" | "mix" | "mixcloud" | "mizuni" | "modx" | "monero" | "napster" | "neos"
    | "nimblr" | "node" | "node-js" | "npm" | "ns8" | "nutritionix" | "odnoklassniki" | "odnoklassniki-square" | "old-republic" | "opencart" | "openid"
    | "opera" | "optin-monster" | "orcid" | "osi" | "page4" | "pagelines" | "palfed" | "patreon" | "paypal" | "penny-arcade" | "periscope" | "phabricator"
    | "phoenix-framework" | "phoenix-squadron" | "php" | "pied-piper" | "pied-piper-alt" | "pied-piper-hat" | "pied-piper-pp" | "pinterest"
    | "pinterest-p" | "pinterest-square" | "playstation" | "product-hunt" | "pushed" | "python" | "qq" | "quinscape" | "quora" | "r-project" | "raspberry-pi"
    | "ravelry" | "react" | "reacteurope" | "readme" | "rebel" | "red-river" | "reddit" | "reddit-alien" | "reddit-square" | "redhat" | "renren"
    | "replyd" | "researchgate" | "resolving" | "rev" | "rocketchat" | "rockrms" | "safari" | "salesforce" | "sass" | "schlix" | "scribd" | "searchengin"
    | "sellcast" | "sellsy" | "servicestack" | "shirtsinbulk" | "shopware" | "simplybuilt" | "sistrix" | "sith" | "sketch" | "skyatlas" | "skype"
    | "slack" | "slack-hash" | "slideshare" | "snapchat" | "snapchat-ghost" | "snapchat-square" | "soundcloud" | "sourcetree" | "speakap" | "speaker-deck"
    | "spotify" | "squarespace" | "stack-exchange" | "stack-overflow" | "stackpath" | "staylinked" | "steam" | "steam-square" | "steam-symbol"
    | "sticker-mule" | "strava" | "stripe" | "stripe-s" | "studiovinari" | "stumbleupon" | "stumbleupon-circle" | "superpowers" | "supple"
    | "suse" | "swift" | "symfony" | "teamspeak" | "telegram" | "telegram-plane" | "tencent-weibo" | "the-red-yeti" | "themeco" | "themeisle" | "think-peaks"
    | "trade-federation" | "trello" | "tripadvisor" | "tumblr" | "tumblr-square" | "twitch" | "twitter" | "twitter-square" | "typo3" | "uber"
    | "ubuntu" | "uikit" | "umbraco" | "uniregistry" | "untappd" | "ups" | "usb" | "usps" | "ussunnah" | "vaadin" | "viacoin" | "viadeo" | "viadeo-square" | "viber"
    | "vimeo" | "vimeo-square" | "vimeo-v" | "vine" | "vk" | "vnv" | "vuejs" | "waze" | "weebly" | "weibo" | "weixin" | "whatsapp" | "whatsapp-square" | "whmcs"
    | "wikipedia-w" | "windows" | "wix" | "wizards-of-the-coast" | "wolf-pack-battalion" | "wordpress" | "wordpress-simple" | "wpbeginner" | "wpexplorer"
    | "wpforms" | "wpressr" | "xbox" | "xing" | "xing-square" | "y-combinator" | "yahoo" | "yammer" | "yandex" | "yandex-international" | "yarn"
    | "yelp" | "yoast" | "youtube" | "youtube-square" | "zhihu";