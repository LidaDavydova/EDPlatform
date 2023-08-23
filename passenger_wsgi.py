# -*- coding: utf-8 -*-
import os, sys
sys.path.insert(0, '/home/d/davydoyh/davydoyh.beget.tech/EDPlatform')
sys.path.insert(1, '/home/d/davydoyh/davydoyh.beget.tech/.venv/lib/python3.11/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'school.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()