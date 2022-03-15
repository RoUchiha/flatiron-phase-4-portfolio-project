class UserSerializer

    include FastJsonapi::ObjectSerializer
    attributes :firstname, :email

end