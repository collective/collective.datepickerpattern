from .datetime import ICollectiveDatePickerDateTimeWidget
from .datetime import ICollectiveDatePickerDateWidget
from plone.app.z3cform.converters import (
    DatetimeWidgetConverter as BaseDatetimeWidgetConverter,
)
from plone.app.z3cform.converters import DateWidgetConverter as BaseDateWidgetConverter
from plone.app.z3cform.converters import (
    DateWidgetToDatetimeConverter as BaseDateWidgetToDatetimeConverter,
)
from zope.component import adapter
from zope.schema.interfaces import IDate
from zope.schema.interfaces import IDatetime


@adapter(IDate, ICollectiveDatePickerDateWidget)
class DateWidgetConverter(BaseDateWidgetConverter):
    pass


@adapter(IDatetime, ICollectiveDatePickerDateTimeWidget)
class DatetimeWidgetConverter(BaseDatetimeWidgetConverter):
    pass


@adapter(IDatetime, ICollectiveDatePickerDateWidget)
class DateWidgetToDatetimeConverter(BaseDateWidgetToDatetimeConverter):
    pass
