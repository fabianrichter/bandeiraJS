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

**`text`** | **`data-bandeira-text`** (string)<br/>
The text to be shown in your Bandeira. Default is "You did not set any text". 

**`separator`** | **`data-bandeira-separator`** (string)<br/>
The separator between each text instance of your Bandeira. Default is one space.

**`selector`** (string)<br/>
The selector of your Bandeira instance. Default is ".bandeira-container".

**`speed`** | **`data-bandeira-speed`** (number)<br/>
The amount of time, one text instance needs to translate by 100% in milliseconds. Default is 5000.

**`uppercase`** | **`data-bandeira-uppercase`** (boolean)<br/>
Boolean if the text should display as capitals or not. Default is true.

**`ltr`** | **`data-bandeira-ltr`** (boolean)<br/>
Boolean if the animation should go from left to right or not. Default is true.


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

**`pause()`**<br/>
Pause the animation. `Bandeira.pause();`

**`play()`**<br/>
Play the animation after pausing it. `Bandeira.play();`

**`update()`**<br/>
Destroy your Bandeira and reload it. `Bandeira.update();`