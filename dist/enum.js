"use strict";
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Admin"] = 1] = "Admin";
    UserStatus[UserStatus["User"] = 2] = "User";
})(UserStatus || (UserStatus = {}));
;
const checkstatus = (status) => {
    switch (status) {
        case UserStatus.Admin:
            console.log('È Admin');
            break;
        case UserStatus.User:
            console.log('È User');
            break;
    }
};
checkstatus(3);
