from django.urls import path,include
from account.views import CourseViewSet,CoursesViewSet,CoursePDFViewSet,CourseVideoViewSet, UserRegistrationView,UserLoginView,UserProfileView,UserChangePasswordView,SendPasswordResetEmailView,UserPasswordResetView,ChapterViewSet

urlpatterns = [
    path('profile/',UserProfileView.as_view(),name='profile'),

    path('register/',UserRegistrationView.as_view(),name='register'),
    path('login/',UserLoginView.as_view(),name='login'),
    path('changepassword/',UserChangePasswordView.as_view(),name='changepassword'),
    path('send-reset-password-email/',SendPasswordResetEmailView.as_view(),name='send-reset-password-email'),
    # path('reset-password/<uid>/<token>/',UserPasswordResetView.as_view(),name='reset-password'),
    path('reset-password/<uid>/<token>/',UserPasswordResetView.as_view(),name='reset-password'),
     #   path('courseapi/',views.course_api),
   
      path('courseapi/<id>/',CourseViewSet.as_view()),
      path('coursesapi/',CoursesViewSet.as_view()),
      path('coursepdfapi/<id>/',CoursePDFViewSet.as_view()),
      path('coursevideoapi/<id>/',CourseVideoViewSet.as_view()),
      path('chapterwiseapi/<id>/',ChapterViewSet.as_view()),
      # path('courseapi/',CourseViewSet.as_view()),

]