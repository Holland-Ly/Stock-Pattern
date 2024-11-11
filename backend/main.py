from flask import Flask, jsonify, request
import yfinance as yf
from flask_cors import CORS
app = Flask(__name__)  
CORS(app)

@app.route('/api/stock/<symbol>', methods=['GET'])
def get_stock_data(symbol):
    # Get query parameters
    interval = request.args.get('interval', '1d')
    range = request.args.get('range', '1mo')

    # Fetch historical data
    try:
        stock = yf.Ticker(symbol)
        hist = stock.history(period=range, interval=interval)
        
        # Map the data to the desired format
        data = {
            "name": stock.info['longName'],
            "currentPrice": stock.info['currentPrice'],
            "previousClose": stock.info['previousClose'],
            "timestamp": hist.index.astype(int) // 10**9,  # Convert to UNIX timestamp
             "data": hist.apply(lambda row: [
                round(row['Open'], 2),
                round(row['Close'], 2),
                round(row['Low'], 2),
                round(row['High'], 2)
            ], axis=1).tolist(),
            "volume": hist['Volume'].tolist()
        }
        data['timestamp'] = data['timestamp'].tolist()
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5001)
