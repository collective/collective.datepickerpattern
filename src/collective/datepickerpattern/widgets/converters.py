from plone.app.z3cform.converters import (
    DatetimeWidgetConverter as BaseDatetimeWidgetConverter,
    DateWidgetConverter as BaseDateWidgetConverter,
    DateWidgetToDatetimeConverter as BaseDateWidgetToDatetimeConverter,
)
from zope.schema.interfaces import IDate, IDatetime
from .datetime import (
    ICollectiveDatePickerDateWidget,
    ICollectiveDatePickerDateTimeWidget,
)
from zope.component import adapter


@adapter(IDate, ICollectiveDatePickerDateWidget)
class DateWidgetConverter(BaseDateWidgetConverter):
    pass


@adapter(IDatetime, ICollectiveDatePickerDateTimeWidget)
class DatetimeWidgetConverter(BaseDatetimeWidgetConverter):
    pass


@adapter(IDatetime, ICollectiveDatePickerDateWidget)
class DateWidgetToDatetimeConverter(BaseDateWidgetToDatetimeConverter):
    pass
