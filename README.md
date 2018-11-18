![alt text](https://github.com/evantimms/PhotoScryber/blob/master/extension/images/write.png "Logo")

# PhotoScryber

## A HackEd Beta 2018 Project

### Contributors: Evan Timms, Songhui Zhang, Mohammad Kebbi

### Introduction

For the 2018 HackEd Beta hackathon we wanted to create a chrome extension that was both easy to use and forfilled a real world purpose. We decided on using Google Cloud's vision and translation APIs to create an extension that translated text on images in foreign languages. 

### Implementation

As mentioned above, we used Google Cloud's APIs to first analyze an image to get text and then translated that text using the translation API. The user would be able to right click any image and select to analyze the image from a context menu created by the chrome extension. The extension would then send the image url using a POSt request to a Python server where the Google API's would be called to anaylyze the image. The response of this request would then contain the translated words which would be shown in the chrome extension pop up. 

### Challenges.

#### 1. Communication between the extension and the server
The first issue was posting a request to the server from the chrome extension. This was resolved by using the JavaScript Fetch API that allowed front end javascript to (after getting the image url) send a JSON object to the server. The server then converted the incoming JSON into a python dictionary where we could then get the URL as a string.

#### 2. Google Cloud API Integration
Google Cloud is a complicated beast. It required alot of research and surfing through documentation to come up with the correct account setup. It was also difficult to chose between a API call using a request on the server or using python libraries. The API call was easier but required storing a API key which could be stolen if left on a public repo, while the client side required alot of enviroment setup such as dealing with enviroment variables and outdated packages. In the end we went with a mix of both, using a API call for the Cloud Vision API and the google.cloud library for text translation.

### Future Ideas

- Support for more file types such as gifs and maybe even videos.
- Embedding the translated text on the image

