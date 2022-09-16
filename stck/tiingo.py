import requests

headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'Token 9792afcabd0d7b2ad8e83fb4e6b82f7f9a743380'
}

def get_meta_data(ticker):
    url = "https://api.tiingo.com/tiingo/daily/{}".format(ticker)
    response = requests.get(url, headers=headers)
    return response.json()

def get_price_data(ticker):
    url = "https://api.tiingo.com/tiingo/daily/{}/prices".format(ticker)
    response = requests.get(url, headers=headers)
    return response.json()[0]