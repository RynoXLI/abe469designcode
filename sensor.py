import time
import board
import busio
import adafruit_vcnl4040
import redis

r = redis.Redis(host='localhost', port=6379, db=0)
 
i2c = busio.I2C(board.SCL, board.SDA)
sensor = adafruit_vcnl4040.VCNL4040(i2c)
 
while True:
    print("Proximity:", sensor.proximity)
    print("Light: %d lux" % sensor.lux)
    print("White", sensor.white)
    r.set('proximity', sensor.proximity)
    r.set('light', sensor.lux)
    r.set('white', sensor.white)
    time.sleep(0.1)
