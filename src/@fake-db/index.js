import mock from "./mock"
import "./navbar/navbarSearch"
import "./navbar/navbarBookmarkSearch"
import "./auth/authentication"
import "./apps/userList"
import "./apps/dataView"
mock.onAny().passThrough()
