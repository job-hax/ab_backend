from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class EventType(models.Model):
    name = models.CharField(max_length=20, null=False)

    def __str__(self):
        return self.name


class Event(models.Model):
    host_user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    title = models.CharField(max_length=50)
    short_description = models.CharField(null=True, max_length=400)
    header_image = models.FileField(blank=True, null=True)
    details = models.TextField()
    location_lat = models.FloatField(blank=True, null=True)
    location_lon = models.FloatField(blank=True, null=True)
    location_title = models.CharField(max_length=250, blank=True, null=True)
    location_address = models.CharField(max_length=250, blank=True, null=True)
    event_date_start = models.DateTimeField(blank=True, null=True)
    event_date_end = models.DateTimeField(blank=True, null=True)
    event_type = models.ForeignKey(EventType, on_delete=models.SET_NULL, null=True)
    spot_count = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_public = models.BooleanField(default=False)
    is_publish = models.BooleanField(default=False)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']


class EventAttendee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='event_attendee')
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
