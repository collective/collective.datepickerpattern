from plone.app.z3cform.interfaces import IDatetimeWidget
from plone.app.z3cform.interfaces import IDateWidget
from plone.app.z3cform.interfaces import ITextWidget
from plone.base import PloneMessageFactory as _
from z3c.form.interfaces import IFieldWidget
from z3c.form.widget import FieldWidget
from zope.interface import implementer
from zope.interface import implementer_only


from plone.app.z3cform.widgets.datetime import DateTimeWidgetBase


class ICollectiveDatePickerDateWidget(ITextWidget):
    pass


class ICollectiveDatePickerDateTimeWidget(ITextWidget):
    pass


# class DateTimeWidgetBase(Base):
#     def render(self):
#         """Render widget.

#         :returns: Widget's HTML.
#         :rtype: string
#         """
#         if self.mode != "display":
#             return super().render()

#         if not self.value:
#             return ""

#         converter = getMultiAdapter((self.field, self), IDataConverter)

#         if not converter:
#             return self.value

#         field_value = converter.toFieldValue(self.value)
#         if field_value is self.field.missing_value:
#             return ""

#         formatter = self.request.locale.dates.getFormatter(
#             self._formater,
#             self._formater_length,
#         )
#         return formatter.format(field_value)

from zope.component import getMultiAdapter
from z3c.form.interfaces import IDataConverter


@implementer_only(ICollectiveDatePickerDateWidget)
class DateWidget(DateTimeWidgetBase):
    """Date widget for z3c.form."""

    _input_type = "date"
    _formater = "date"
    _formater_length = "short"

    pattern = "collective-datepicker"
    klass = "date-widget"


@implementer(IFieldWidget)
def DateFieldWidget(field, request):
    return FieldWidget(field, DateWidget(request))


@implementer_only(ICollectiveDatePickerDateTimeWidget)
class DatetimeWidget(DateTimeWidgetBase):
    """Datetime widget for z3c.form."""

    _input_type = "datetime-local"
    _formater = "dateTime"
    _formater_length = "short"

    pattern = "collective-datepicker"
    klass = "datetime-widget"


@implementer(IFieldWidget)
def DatetimeFieldWidget(field, request):
    return FieldWidget(field, DatetimeWidget(request))
