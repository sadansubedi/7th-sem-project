from rest_framework import serializers
from account.models import User,Course, CourseVideo, CoursePDF,ChapterwisePDF
from django.utils.encoding import smart_str,force_bytes,DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from account.utils import Util

class UserRegistrationSerializer(serializers.ModelSerializer):
    
    password2 = serializers.CharField(style={'input_type':'password'},write_only=True)
    class Meta:
        model = User
        fields = ['email','name','password','password2']
        extra_kwargs={
            'password':{'write_only':True}
        }
    #validating password and confirm password while registration
       #it is call when is_valid() is called in view.py  
    def validate(self, attrs):
        password =attrs.get('password')
        password2 =attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError("password and confirm password doesn't match ")
        return attrs
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        model = User
        fields =['email','password']
        


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=['id','email','name']

class UserChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    class Meta:
        fields = ['password','password2']

    def validate(self, attrs):# this line execute from views.py line no 57 ok
        password =attrs.get('password')
        password2 =attrs.get('password2')
        user = self.context.get('user')
        if password != password2:
            raise serializers.ValidationError("password and confirm password doesn't match ")
        user.set_password(password)
        user.save()
        return attrs
    

class SendPasswordResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        fields = ['email']
    
    def validate(self, attrs):
        email  = attrs.get('email')
        if User.objects.filter(email=email).exists():#db email and provided email by user are if exist then
            user = User.objects.get(email=email)
            # uid = user.id
            uid = urlsafe_base64_encode(force_bytes(user.id))
            print('Encoded Uid',uid)
            token = PasswordResetTokenGenerator().make_token(user)
            print('password Reset TOken',token)
            # link = 'http://localhost:3000/api/user/reset/'+uid+'/'+token
            link =' http://localhost:5173/api/user/reset-password/'+uid+'/'+token
            print('password Reset Link',link)
            # Send EMail
            body = 'Click Following Link to Reset Your Password'+link
            data = {
                'subject':'Reset Your Password',
                'body':body,
                'to_email':user.email
            }
            Util.send_email(data)
            return attrs
        else:
            raise serializers.ValidationError("you are not Registered User")
        

class UserPasswordResetSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    class Meta:
        fields = ['password','password2']

    def validate(self, attrs):# this line execute from views.py line no 57 ok
        try:
            password =attrs.get('password')
            password2 =attrs.get('password2')
            uid = self.context.get('uid')
            token = self.context.get('token')
            print(password,password2,uid,token)
            if password != password2:
                raise serializers.ValidationError("password and confirm password doesn't match ")
            id = smart_str(urlsafe_base64_decode(uid))
            user = User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user,token):
                raise serializers.ValidationError('TOken is not valid or expired')
            user.set_password(password)
            user.save()
            return attrs
        except DjangoUnicodeDecodeError as identifier:
            PasswordResetTokenGenerator().check_token(user,token)
            raise serializers.ValidationError('TOken is not valid or expired')

        
# class courseserializer(serializers.ModelSerializer):
#    class Meta:
#        model = Course
#        fields = '__all__'

#    def validate(self, attrs):
#     id = self.context.get('id')
#     course = Course.objects.filter(id=id).exists()
#     print(course)


class courseserializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

    def validate(self, attrs):
        id = self.context.get('id')
        
        # Check if a course with the given ID exists
        if not Course.objects.filter(id=id).exists():
            raise serializers.ValidationError("Course with the provided ID does not exist.")
        
        # You can add more specific validation here if needed

        return attrs

class coursesserializeres(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class CourseVideoSerializer(serializers.ModelSerializer):
   class Meta:
       model = CourseVideo
       fields = '__all__'

class CoursePDFSerializer(serializers.ModelSerializer):
   class Meta:
       model = CoursePDF
       fields = '__all__'


class ChapterPDFSerializer(serializers.ModelSerializer):
   class Meta:
       model = ChapterwisePDF
       fields = '__all__'
       #admin@example.com
       #admin 