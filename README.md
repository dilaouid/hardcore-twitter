# Hardcore-Twitter

⚠️ **Warning** ⚠️

After a few issues, I've noticed that the classnames are kinda capricious: it may changes from an user to another. BUT ! There is like 80% chance that this would works in your side.

## How does it work
The things that would interest you are the `index.html` file and the `styles/` folder.

### index.html
In this, you can see a list of input and labels. The `type` attribute for the input MUST be checkbox. The `id` attribute is the stylesheet that would be activated if the checkbox is checked. That's all.

### styles/
Here, you have a `css` file for each option in the Chrome Extension. Name the file it like the `id` attribute in the input of the index.html file.

## Installation
This is a Chrome Extension, so after you cloned this repo, go to the url `chrome://extensions/`, activate Developer Mode, and in "Load unpacked extension", open this repository.
