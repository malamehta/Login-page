import React from 'react'

export default function isLoggedIn() {
    const data = localStorage.getItem("_token");
    if (!data) {
      return false;
    }
    return true;
  }

