# bandeiraJS 
Bandeira is lightweight JavaScript library for rotating text banners.

## Contributing
Compile via `npm run build`.

## How to use bandeiraJS
### Import
In your HTML import it with a script tag.
```html
<script src="bandeira.min.js"></script>
```
Make sure, your HTML contains a container to place the banner like this:
```html
<div class="bandeira-container"></div>
```
Now you can Bandeira as a class.
```js
const bandeira = new Bandeira();
```
### Settings
To change the behaviour of your bandeira, you have two options.
<ol>
<li>Pass settings via data-attributes in the HTML</li>
<li>Pass settings as an object in the JavaScript</li>
</ol>

#### Available Settings

<table>
<tr>
<th>Data attribute</th>
<th>JS object key</th>
<th>Data type</th>
<th>Default</th>
</tr>
<tr>
<td>data-text</td>
<td>text</td>
<td>string</td>
<td>you did not set any text</td>
</tr>
<tr>
<td>data-separator</td>
<td>separator</td>
<td>string</td>
<td>(single space)</td>
</tr>
<tr>
<td>-</td>
<td>selector</td>
<td>string</td>
<td>.bandeira-container</td>
</tr>
<tr>
<td>data-speed</td>
<td>speed</td>
<td>number</td>
<td>5000</td>
</tr>
<tr>
<td>data-ltr</td>
<td>ltr</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>data-upper-case</td>
<td>upperCase</td>
<td>boolean</td>
<td>true</td>
</tr>
</table>

#### Change settings via data-attributes
If you want to change the behaviour directly in the HTML, pass the arguments as data-attributes. Example:
```html
<div class="bandeira-container"
     data-text="This is your rotating text"
     data-speed="5000"></div>
```

#### Change settings via JavaScript object
To change the behaviour in the JavaScript, pass a settings object like this
```js
const bandeira = new Bandeira({
    text: 'This is your rotating text',
    selector: 'bandeira-container',
    speed: 5000,
});
```
