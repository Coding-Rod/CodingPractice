from datetime import datetime
import pytz

españa_timezone = pytz.timezone("Europe/Madrid")
españa_date = datetime.now(españa_timezone)
print(f"Madrid: {españa_date.strftime('%d/%m/%Y, %H:%M:%S')}")

mexico_timezone = pytz.timezone("America/Mexico_City")
mexico_date = datetime.now(mexico_timezone)
print(f"Ciudad de México: {mexico_date.strftime('%d/%m/%Y, %H:%M:%S')}")

caracas_timezone = pytz.timezone("America/Caracas")
caracas_date = datetime.now(caracas_timezone)
print(f"Caracas: {caracas_date.strftime('%d/%m/%Y, %H:%M:%S')}")