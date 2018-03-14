import {showLinks} from "../app/Logo";


let isSignedIn = false;
let logoLink = '/login';

// Logo functions
export function setLogoLink(link) {
    logoLink = link;
}

export function getLogoLink() {
    return logoLink;
}

// Verification functions
export function setSignedIn(signedIn) {
    isSignedIn = signedIn;
    setLogoLink('/home');
    showLinks();
}

export function getSignedIn() {
    return isSignedIn;
}