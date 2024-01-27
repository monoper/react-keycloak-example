import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:8889",
    realm: "TestRealm",
    clientId: "TestClient",
});

export default keycloak;