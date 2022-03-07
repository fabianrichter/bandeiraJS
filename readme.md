# BandeiraJS 
Bandeira is a lightweight JavaScript library for rotating text banners.

- - -

## Contributing
Compile via `npm run build`.

## Installation

Installation is super easy! First make sure, your HTML contains a container to place the banner like this:
```html
<div class="bandeira-container"></div>
```
If you use Webpack ...
```js
import Bandeira from 'bandeira';
new Bandeira();
```
... or simply add it to your HTML
```html
<script src="bandeira.min.js"></script>
<script>
    new Bandeira();
</script>
```

## How to use Bandeira
To change the behaviour of your bandeira, you have two options.
<ol>
<li>Pass settings via data-attributes in the HTML</li>
<li>Pass settings as an object in the JavaScript</li>
</ol>

### Available options

<table>
<tr>
<th>Data attribute</th>
<th>JS object key</th>
<th>Data type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td>data-bandeira-text</td>
<td>text</td>
<td>string</td>
<td>"you did not set any text"</td>
<td>The text to be shown </td>
</tr>
<tr>
<td>data-bandeira-separator</td>
<td>separator</td>
<td>string</td>
<td>" "</td>
<td>The separator between each text instance</td>
</tr>
<tr>
<td>-</td>
<td>selector</td>
<td>string</td>
<td>".bandeira-container"</td>
<td>The selector to display bandeira</td>
</tr>
<tr>
<td>data-bandeira-speed</td>
<td>speed</td>
<td>number</td>
<td>5000</td>
<td>The amount of time, one text instance needs to do one animation cycle</td>
</tr>
<tr>
<td>data-bandeira-ltr</td>
<td>ltr</td>
<td>boolean</td>
<td>true</td>
<td>Animate from left to right</td>
</tr>
<tr>
<td>data-bandeira-upper-case</td>
<td>upperCase</td>
<td>boolean</td>
<td>true</td>
<td>Show the text in upper case</td>
</tr>
</table>

### Change options via data-attributes
If you want to change the behaviour directly in the HTML, pass the arguments as data-attributes. Example:
```html
<div class="bandeira-container"
     data-text="This is your rotating text"
     data-speed="5000"></div>
```

### Change options via JavaScript object
To change the behaviour in the JavaScript, pass a settings object like this
```js
const bandeira = new Bandeira({
    text: 'This is your rotating text',
    selector: 'bandeira-container',
    speed: 5000,
});
```

## Methods

**`pause()`**
Pause the animation. `Bandeira.pause();`

**`play()`**
Play the animation after pausing it. `Bandeira.play();`

**`update()`**
Destroy your Bandeira and reload it. `Bandeira.update();`