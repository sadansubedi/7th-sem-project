from django.contrib import admin
from account.models import User, Course,CoursePDF,CourseVideo,ChapterwisePDF
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


class UserModelAdmin(BaseUserAdmin):
   
    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ["id","email", "name", "is_admin"]
    list_filter = ["is_admin"]
    fieldsets = [
        (None, {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["name"]}),
        ("Permissions", {"fields": ["is_admin"]}),
    ]
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["email", "name", "password1", "password2"],
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["email",'id']
    filter_horizontal = []


# Now register the new UserAdmin...
admin.site.register(User, UserModelAdmin)


@admin.register(Course)
class CourseModelAdmin(admin.ModelAdmin):
    list_display = ['id','course_name','description','stform']


@admin.register(CourseVideo)
class CourseVideoModelAdmin(admin.ModelAdmin):
    list_display = ['id','courseV','video_file']


@admin.register(CoursePDF)
class CoursePDFModelAdmin(admin.ModelAdmin):
    list_display = ['id','courseP','pdf_file']


@admin.register(ChapterwisePDF)
class ChapterPDFModelAdmin(admin.ModelAdmin):
    list_display = ['id','chapterP','chapter_pdf_file']