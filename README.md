## Signature
A pad for capturing signatures
This widget is used to save a signature to an attribute.
The widget implements bezier curves and velocity for the smooth drawing of the signature

## Features
* Record signature to an attribute
* Customizable pen color and pen size 
* Reset button to delete signature and reset the canvas

## Demo project
[https://signature100.mxapps.io/](https://signature100.mxapps.io)


## Usage

![Data source](/assets/Capture.PNG)
- A signature drawn on the canvas.

![Data source](/assets/signatureImage.PNG)
- After the signature is drawn, it is then captured as an image and saved to the configured image attribute. The reset button can be used to clear the contents of drawing canvas

### configuration

Add the widget to a data view. Connect the data URL property to an unlimited String attribute of the data view context object.

![Data source](/assets/Home.PNG)
- Used to select the attribute which holds the signature. The attribute must be an unlimited string.

![Data source](/assets/penCustomization.PNG)
- This is where the pen customisation is done. The customisable options are pen size, pen color, the maximum and minimum pen width and the velocity pressure.

![Data source](/assets/appear.PNG)
- The signature timeout is time taken before the signature is saved to an image.

### Properties
* *Pen color* - HTML color code of the pen.
* *Signature timeout* - Amount of milliseconds the widget will wait after the user has stopped writing before saving the signature.
* *Canvas height* - Height of writable area in pixels.
* *Canvas width* - Width of the writable area in pixels.
* *Show background grid* - When set to yes, a grid is shown in the background of the writable area.
* *Grid X* - The distance in pixels between gridlines in the horizontal direction.
* *Grid Y* - The distance in pixels between gridlines in the vertical direction.
* *Grid color* - HTML color code of the grid
* *Grid border width* - Width of canvas border in pixels
* *Data URL* - Unlimited string attribute that is used to save the signature.
* *minWidth(float)* - Minimum width of a line. Defaults to 0.5.
* *maxWidth(float)* - Maximum width of a line. Defaults to 2.5.
* *velocityFilterWeight(float)* - Weight used to modify new velocity based on the previous velocity. Defaults to 0.7.

## Compatibility
The widget is usable and works smoothly in Google Chrome, Internet Explorer. 
Firefox: In case the widget is not working, set the setting dom.w3c_pointer_events.enabled to “true” from about: config

