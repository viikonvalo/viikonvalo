/**
 * Converter from Phile markdown to Hugo markdown
 * Petri Salmela
 * 2016-07-05
 */

var filename = process.argv[2];
var fs = require('fs');

var Header = function(options) {
    this.Title = options.Title || '';
    this.Description = options.Description || '';
    this.Date = new Date(options.Date || Date.now());
    this.Week = options.Week || (new Date()).getYear() + 'x00';
    this.Number = options.Number || 0;
    this.Categories = options.Tags.split(',') || [];
    this.Tags = [];
    this.Type = 'post';
    this.Author = options.Author || '';
    this.Pageimage = options.Pageimage;
    this.initTags();
}

Header.prototype.setAuthor = function(author) {
    this.Author = author;
};

Header.prototype.setDescription = function(text) {
    if (text.indexOf('**') === 0 && text.indexOf('**', 1) === text.length - 2) {
        text = text.substring(2, text.length - 2);
    };
    this.Description = text;
};

Header.prototype.initTags = function() {
    var cat = [];
    var tag = [];
    var item;
    while (this.Categories.length > 0) {
        item = this.Categories.shift();
        item = item.trim();
        switch (item) {
            case 'FreeBSD':
            case 'OpenBSD':
            case 'PC-BSD':
            case 'Aix':
            case 'AmigaOS':
            case 'Amiga OS':
            case 'Android':
            case 'BeOS':
            case 'GNU/Hurd':
            case 'Haiku':
            case 'HP-UX':
            case 'Internet Explorer':
            case 'iOS':
            case 'Irix':
            case 'Linux':
            case 'Maemo':
            case 'Meego':
            case 'MorphOS':
            case 'NetBSD':
            case 'Nintendo DS':
            case 'Nintendo GBA':
            case 'Nintendo Wii':
            case 'OpenVMS':
            case 'OS/2':
            case 'QNX':
            case 'RISC OS':
            case 'Raspberry Pi':
            case 'S60':
            case 'SailfishOS':
            case 'Solaris':
            case 'Unix':
            case 'Unixit':
            case 'VMS':
            case 'WebOS':
            case 'WinCE':
            case 'Windows':
            case 'Windows Mobile':
            case 'Windows Phone 7':
                tag.push(item);
                break;
            case 'Symbian':
            case 'Symbian OS':
                item = 'Symbian';
                tag.push(item);
                break;
            case 'Mac OS X':
            case 'MacOS X':
                item = 'Mac OS X';
                tag.push(item);
                break;
            case 'Chrome':
            case 'Chromium':
            case 'Firefox':
            case 'Opera':
            case 'Safari':
            case 'Www-selain':
                item = 'www-selain';
                tag.push(item);
                break;
            case 'Kaikki':
            case 'Kaikki alustat':
                item = 'Kaikki alustat';
                tag.push(item);
                break;
            default:
                cat.push(item);
                break;
        };
    };
    this.Tags = tag;
    this.Categories = cat;
};

Header.prototype.getHeader = function() {
    var text = [
        '+++',
        'Date = "' + this.Date.toISOString() + '"',
        'Title = "' + this.Title + '"',
        'Description = "' + this.Description + '"',
        'Week = "' + this.Week + '"',
        'Number = "' + this.Number + '"',
        'Tags = ' + JSON.stringify(this.Tags),
        'Categories = ' + JSON.stringify(this.Categories),
        'Type = "' + this.Type + '"',
        'Author = "' + this.Author + '"',
        'Pageimage = "' + this.Pageimage + '"',
        '+++',
        ''
    ];
    return text.join('\n');
};



var Body = function(text) {
    this.text = this.convert(text);
}

Body.prototype.convert = function(text) {
    var imgrex = new RegExp('\]\\(images', 'g');
    var wraprex = new RegExp('<div class="([^"]*)" markdown="1">', 'g');
    var wrapendrex = new RegExp('</div>', 'g');
    var emptyltext = new RegExp('\\[\\]\\(\.\./images', 'g');
    text = text.replace(imgrex, '](/images');
    text = text.replace(wraprex, '{{% wrapper class="$1" %}}');
    text = text.replace(wrapendrex, '{{% /wrapper %}}');
    text = text.replace(emptyltext, '[ ](/images');
    return text;
};

Body.prototype.getBody = function() {
    return this.text;
}

var Converter = function(lines) {
    this.lines = lines;
    this.readHeader();
    this.readBody();
    this.setAuthor();
    this.setDescription();
};

Converter.prototype.readHeader = function() {
    var head = {}, line, index, key, value;
    if (this.lines[0].substr(0, 4) === '<!--') {
        this.lines.shift();
        while (this.lines.length > 0 && this.lines[0].substr(0,3) !== '-->') {
            line = this.lines.shift();
            index = line.indexOf(':');
            key = line.substring(0, index);
            value = line.substring(index + 1).trim();
            head[key] = value;
        };
        if (this.lines.length > 0 && this.lines[0].substr(0, 3) === '-->') {
            this.lines.shift();
        };
    };
    this.header = new Header(head);
};

Converter.prototype.readBody = function() {
    this.body = new Body(this.lines.join('\n'));
};

Converter.prototype.setAuthor = function() {
    if (this.body && this.header) {
        var match = this.body.getBody().match(/^\*Teksti:\s*([^*]*)*/im);
        if (match && match[1]) {
            var author = match[1];
            this.header.setAuthor(author);
        };
    };
};

Converter.prototype.setDescription = function() {
    if (this.body && this.header) {
        var match = this.body.getBody().match(/^\s*\*\*([^*]*)\*\*/);
        if (match && match[1]) {
            var description = match[1];
            description = description.replace(/\n/g, ' ');
            description = description.replace(/\"/g, '\\"');
            description = description.replace(/\[([^\]]*)\]\([^\)]*\)/g, '$1');
            this.header.setDescription(description);
        };
    };
};

Converter.prototype.getHugo = function() {
    var text = [];
    text.push(this.header.getHeader());
    text.push(this.body.getBody());
    return text.join('\n');
};

function main(filename) {
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            return console.error('Could not read file: ', filename);
        };
        var lines = data.split('\n');
        var converter = new Converter(lines);
        console.log(converter.getHugo());
    });
};


if (filename) {
    main(filename);
} else {
    console.error('No filename given');
}