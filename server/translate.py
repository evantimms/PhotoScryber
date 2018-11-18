# Imports the Google Cloud client library
from google.cloud import translate

def translate_text(text):
    # Instantiates a client
    translate_client = translate.Client()

    # The target language
    target = 'en'

    # Translates given text into english
    translation = translate_client.translate(
        text,
        target_language=target)
    print('----------')
    print(translation)
    return translation['translatedText']
