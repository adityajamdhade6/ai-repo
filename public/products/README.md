# Product photos

Drop a photo here named after the flavour `id` (see `js/data.js`) and the
site will automatically use it in place of the generated coin.

Expected files (any of .jpg / .png / .webp — square works best, ~1000×1000):

    ember.jpg        → Ember Chilli
    jeera.jpg        → Sea Salt & Jeera
    pepper.jpg       → Smoked Pepper
    masala.jpg       → Masala Street
    cheddar.jpg      → Aged Cheddar
    mint.jpg         → Mint & Lime
    methi.jpg        → Methi Field
    pizza.jpg        → Wood-Fire Pizza
    golgappa.jpg     → Golgappa Rush

Then, in `js/data.js`, set the flavour's `image` field, e.g.:

    image: "assets/products/ember.jpg"

That's it — refresh and the photo appears in the flavour card and cart.
Until a file is set, the original generated khakhra coin shows instead.

Use only photos you own or have a commercial licence for.
