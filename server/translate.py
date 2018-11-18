# Imports the Google Cloud client library
from google.cloud import translate

def translate_text(given_string):
    # Instantiates a client
    translate_client = translate.Client()
    # The text to translate
    text = given_string
    # The target language
    target = 'en'

    # Translates given text into english
    translation = translate_client.translate(
        text,
        target_language=target)

    return translation['translatedText']
