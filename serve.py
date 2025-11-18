import http.server
import socketserver

class MyHTTPServer(http.server.HTTPServer):
    def server_bind(self):
        self.socket.bind(self.server_address)
        self.server_address = self.socket.getsockname()

if __name__ == '__main__':
    Handler = http.server.SimpleHTTPRequestHandler
    with MyHTTPServer(('127.0.0.1', 8000), Handler) as httpd:
        print('http://127.0.0.1:8000/')
        httpd.serve_forever()