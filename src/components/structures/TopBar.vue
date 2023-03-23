<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="index.html" class="logo logo-dark">
            <span class="logo-sm">
                <img src="@/assets/images/logo-sm.png" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="@/assets/images/logo-dark.png" alt="" height="22">
            </span>
          </a>

          <a href="index.html" class="logo logo-light">
            <span class="logo-sm">
                <img src="@/assets/images/logo-sm.png" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="@/assets/images/logo-light.png" alt="" height="22">
            </span>
          </a>
        </div>

        <button type="button" class="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn">
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>

      <div class="d-flex">
        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icon-sm" data-feather="search"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
            <form class="p-2">
              <div class="search-box">
                <div class="position-relative">
                  <input type="text" class="form-control rounded bg-light border-0" placeholder="Search...">
                  <i class="mdi mdi-magnify search-icon"></i>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="dropdown d-inline-block language-switch">
          <button type="button" class="btn header-item"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img id="header-lang-img" src="@/assets/images/flags/us.jpg" alt="Header Language" height="16">
          </button>
          <div class="dropdown-menu dropdown-menu-end">

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="eng">
              <img src="@/assets/images/flags/us.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">English</span>
            </a>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="sp">
              <img src="@/assets/images/flags/spain.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">Spanish</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="gr">
              <img src="@/assets/images/flags/germany.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">German</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="it">
              <img src="@/assets/images/flags/italy.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">Italian</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="ru">
              <img src="@/assets/images/flags/russia.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">Russian</span>
            </a>
          </div>
        </div>

        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item noti-icon" id="page-header-notifications-dropdown"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icon-sm" data-feather="bell"></i>
            <span class="noti-dot bg-danger"></span>
          </button>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
               aria-labelledby="page-header-notifications-dropdown">
            <div class="p-3">
              <div class="row align-items-center">
                <div class="col">
                  <h5 class="m-0 font-size-15"> Notifications </h5>
                </div>
                <div class="col-auto">
                  <a href="#!" class="small"> Mark all as read</a>
                </div>
              </div>
            </div>
            <div data-simplebar style="max-height: 250px;">
              <h6 class="dropdown-header bg-light">New</h6>
              <h6 class="dropdown-header bg-light">Earlier</h6>
            </div>
            <div class="p-2 border-top d-grid">
              <a class="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                <i class="uil-arrow-circle-right me-1"></i> <span>View More..</span>
              </a>
            </div>
          </div>
        </div>

        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item noti-icon right-bar-toggle" id="right-bar-toggle">
            <i class="icon-sm" data-feather="settings"></i>
          </button>
        </div>

        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item user text-start d-flex align-items-center" id="page-header-user-dropdown"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="rounded-circle header-profile-user" src="@/assets/images/avatar-default.jpg"
                 alt="Header Avatar">
            <span class="ms-2 d-none d-sm-block user-item-desc">
                                <span class="user-name">Kate Dudley</span>
                                <span class="user-sub-title">Administrator</span>
                            </span>
          </button>
          <div class="dropdown-menu dropdown-menu-end pt-0">
            <div class="p-3 bg-primary border-bottom">
              <h6 class="mb-0 text-white">Kate Dudley</h6>
              <p class="mb-0 font-size-11 text-white-50 fw-semibold">kate.dudley@email.com</p>
            </div>
            <a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-account-circle text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Profile</span></a>
            <a class="dropdown-item" href="apps-chat.html"><i class="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Messages</span></a>
            <a class="dropdown-item" href="apps-kanban-board.html"><i class="mdi mdi-calendar-check-outline text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Taskboard</span></a>
            <a class="dropdown-item" href="pages-faqs.html"><i class="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Help</span></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-wallet text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Balance : <b>$6951.02</b></span></a>
            <a class="dropdown-item d-flex align-items-center" href="user-settings.html"><i class="mdi mdi-cog-outline text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Settings</span><span class="badge badge-soft-success ms-auto">New</span></a>
            <a class="dropdown-item" href="auth-lockscreen-basic.html"><i class="mdi mdi-lock text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Lock screen</span></a>
            <a class="dropdown-item" href="auth-signout-basic.html"><i class="mdi mdi-logout text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Logout</span></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
