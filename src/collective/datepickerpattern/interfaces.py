"""Module where all interfaces, events and exceptions live."""

from zope.publisher.interfaces.browser import IDefaultBrowserLayer
from plone.app.z3cform.interfaces import IPloneFormLayer


class IBrowserLayer(IPloneFormLayer):
    """Marker interface that defines a browser layer."""
