export default class Bandeira {
    constructor(_settings) {
        // set default settings if nothing is specified
        const defaults = {
            text: 'You did not set any text 😓',
            upperCase: true,
            selector: '.bandeira-container',
            separator: '&#x20;',
            speed: 5000,
            ltr: true,
            amount: 10,
        };

        // if no settings are specified, pull in defaults
        if (_settings === undefined) {
            _settings = defaults;
        }

        // set default selector
        let target;
        _settings.selector === undefined
            ? (target = defaults.selector)
            : (target = _settings.selector);
        this.target = document.querySelector(target);

        // go through data-attributes of banner container
        for (const key in defaults) {
            // convert camelcase key from defaults into dashcase string
            const dataKey =
                'data-bandeira-' +
                key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
            let currentSetting = this.target.getAttribute(dataKey);

            // if key is specified in data attribute, push it to global settings variable
            if (currentSetting) {
                if (currentSetting.match(/[0-9]+/))
                    // convert string to int, if it is a number
                    currentSetting = parseInt(currentSetting);
                if (currentSetting == 'true')
                    // convert string 'true' to boolean
                    currentSetting = true;
                if (currentSetting == 'false')
                    // convert string 'false' to boolean
                    currentSetting = false;

                _settings[key] = currentSetting;
            }
        }
        console.log(_settings);

        // set global settings or fall back to defaults
        _settings.text === undefined
            ? (this.text = defaults.text)
            : (this.text = _settings.text);
        _settings.separator === undefined
            ? (this.separator = defaults.separator)
            : (this.separator = _settings.separator);
        _settings.speed === undefined
            ? (this.speed = defaults.speed)
            : (this.speed = _settings.speed);
        _settings.uppercase === undefined
            ? (this.upperCase = defaults.upperCase)
            : (this.upperCase = _settings.upperCase);
        _settings.ltr === undefined
            ? (this.ltr = defaults.ltr)
            : (this.ltr = _settings.ltr);
        _settings.amount === undefined
            ? (this.amount = defaults.amount)
            : (this.amount = _settings.amount);

        this.animation = [];

        // start methods
        this.prepareContainer();
        for (let i = 0; i < this.amount; i++) this.renderTextInstance();
        this.animateTextInstances();
    }

    // set styles for container so it gets displayed properly
    prepareContainer() {
        this.target.style.overflow = 'hidden';
        this.target.style.position = 'relative';
        this.target.style.width = '100%';
        this.target.style.maxWidth = '100%';
        this.target.style.height = '40px';
    }

    // render text instance
    renderTextInstance() {
        let text = this.text;
        // transform text to uppercase if enabled
        if (this.upperCase) {
            text = text.toUpperCase();
        }

        // render text instance to DOM
        this.target.insertAdjacentHTML(
            'beforeend',
            `<span class="text-rotator-instance">${text}${this.separator}</span>`
        );
    }

    // animate text instances
    animateTextInstances() {
        let instance = this.target.querySelectorAll('.text-rotator-instance');

        instance.forEach((element, i) => {
            // calculate width of one instance
            let elementWidth = element.offsetWidth;
            element.style.position = 'absolute';

            // define keyframes with translation of element width
            let keyframes = [
                { transform: 'translateX(' + elementWidth * (i - 1) + 'px)' },
                { transform: 'translateX(' + elementWidth * i + 'px)' },
            ];

            // swap keyframes elements if ltr is disabled
            if (!this.ltr) {
                keyframes = [keyframes[1], keyframes[0]];
            }

            // start animation
            let animation = element.animate(keyframes, {
                duration: this.speed,
                iterations: Infinity,
            });

            this.animation.push(animation);
        });
    }

    pause() {
        this.animation.forEach((animation) => {
            animation.pause();
        });
    }

    play() {
        this.animation.forEach((animation) => {
            animation.play();
        });
    }

    update() {
        this.animation = [];
        this.target.innerHTML = '';
        this.prepareContainer();
        for (let i = 0; i < this.amount; i++) this.renderTextInstance();
        this.animateTextInstances();
    }
}