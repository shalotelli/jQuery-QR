jQuery QR Code Generator
=========

jQuery Plugin for converting a link or text in to QR code.
If a link is specified, the URL is used. Text can also be used as a label or as data for the QR code.
If there is no text or URL, the plugin converts the relative elements content into a QR code.

##Usage
###JavaScript
```javascript
$("#qr").qr('This overrides the content', { showLabel: true, size: 100 });
$(".qr-link").qr();
```
###HTML
```html
<div id="qr">This is the content</div>
<a href="http://www.responsiveshops.com.com/" class="qr-link">ResponsiveShops</a> 
```

##Options
* __text:__ Text to convert. If none set, content of the relative element is used.
* __size:__ Size of code in pixels
*__showLabel:__ Flag to show or hide text label or element content
* __correction:__
  1. L - [Default] Allows recovery of up to 7% data loss
  2. M - Allows recovery of up to 15% data loss
  3. Q - Allows recovery of up to 25% data loss
  4. H - Allows recovery of up to 30% data loss
* __margin:__ Amount of white space around the code
