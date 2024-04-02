from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import courseserializer,coursesserializeres,CoursePDFSerializer,CourseVideoSerializer,UserRegistrationSerializer,UserLoginSerializer,UserProfileSerializer,UserChangePasswordSerializer,SendPasswordResetEmailSerializer,UserPasswordResetSerializer,ChapterPDFSerializer
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework import viewsets
from account.models import User,Course,CourseVideo, CoursePDF,ChapterwisePDF

from django.utils import timezone
from datetime import timedelta
from django.conf import settings


#generate token manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    access_token_lifetime = settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME']
    access_token_expiry = timezone.now() + access_token_lifetime
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'accessExpiresIn': int(access_token_expiry.timestamp())
    }



class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]
    def post(self,request,format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token= get_tokens_for_user(user)
            return Response({'token':token,'msg':'Registration success'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

class UserLoginView(APIView):
    renderer_classes = [UserRenderer]
    def post(self,request,format=None):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email=email,password=password)
            if user is not None:
                 token= get_tokens_for_user(user)
                 return Response({'token':token,'msg':'login success'},status=status.HTTP_200_OK)
            else:
                 return Response({'errors':{'non_field_errors':['Email or password is not Valid']}},status=status.HTTP_404_NOT_FOUND)
            
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self,request,format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data,status=status.HTTP_200_OK)
        
class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def post(self,request,format=None):
        serializer = UserChangePasswordSerializer(data=request.data,context={'user':request.user})
        if serializer.is_valid(raise_exception=True):
            return Response({'msg':'password change successfully'},status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
        
class SendPasswordResetEmailView(APIView):
    # renderer_classes =[UserRenderer]
    def post(self,request,format=None):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            return Response({'msg':'password Reset Link send.please check your Email'},status=status.HTTP_200_OK)

class UserPasswordResetView(APIView):
    renderer_classes =[UserRenderer]
    def post(self,request,uid,token,format=None):
        serializer = UserPasswordResetSerializer(data=request.data,context={'uid':uid,'token':token})
        if serializer.is_valid(raise_exception=True):
            return Response({'msg':'password Reset successfully'},status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

# class CourseViewSet(APIView):
#     renderer_classes = [UserRenderer]
#     permission_classes = [IsAuthenticated]
#     def get(self,request,id,format=None):
#         serializer =  courseserializer(context={'id':id})
#         return Response(serializer.data,status=status.HTTP_200_OK)


class CourseViewSet(APIView):
    # renderer_classes = [UserRenderer]  # Make sure UserRenderer is defined
    # permission_classes = [IsAuthenticated]

    def get_object(self, id):
        try:
            return Course.objects.get(id=id)
        except Course.DoesNotExist:
            raise Response({"error": "Course not found"}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request,id, format=None):
        # print(id)
        course_instance = self.get_object(id)
        # print(course_instance)
        serializer = courseserializer(course_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CoursesViewSet(APIView):
     def get(self, request, format=None):
        # print(id)
         try:
            course_instance= Course.objects.all()
            print(course_instance)
            serializer = coursesserializeres(course_instance,many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
         except Course.DoesNotExist:
            raise Response({"error": "Course not found"}, status=status.HTTP_404_NOT_FOUND)
      

# class CoursesViewSet(viewsets.ModelViewSet):
#    queryset = Course.objects.all()
#    serializer_class = courseserializer 


class CoursePDFViewSet(APIView):
    renderer_classes = [UserRenderer]  # Make sure UserRenderer is defined
   # permission_classes = [IsAuthenticated]

    def get_object(self, id):
        try:
            return CoursePDF.objects.get(id=id)
        except CoursePDF.DoesNotExist:
            raise Response({"error": "CoursePDF not found"}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request,id, format=None):
        # print(id)
        course_instance = self.get_object(id)
        # print(course_instance)
        serializer = CoursePDFSerializer(course_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)



class CourseVideoViewSet(APIView):
    renderer_classes = [UserRenderer]  # Make sure UserRenderer is defined
   # permission_classes = [IsAuthenticated]

    def get_object(self, id):
        try:
            return CourseVideo.objects.get(id=id)
        except CourseVideo.DoesNotExist:
            raise Response({"error": "Coursevideo not found"}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request,id, format=None):
        # print(id)
        course_instance = self.get_object(id)
        # print(course_instance)
        serializer = CourseVideoSerializer(course_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)
    


class ChapterViewSet(APIView):
    renderer_classes = [UserRenderer]  # Make sure UserRenderer is defined
   # permission_classes = [IsAuthenticated]

    def get_object(self, id):
        try:
            return ChapterwisePDF.objects.get(id=id)
        except ChapterwisePDF.DoesNotExist:
            raise Response({"error": "Coursevideo not found"}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request,id, format=None):
        # print(id)
        chapter_instance = self.get_object(id)
        # print(course_instance)
        serializer = ChapterPDFSerializer(chapter_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)



 