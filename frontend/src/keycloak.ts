import Keycloak from 'keycloak-js'

export const keycloak = new Keycloak({
    url: "http://localhost:8889",
    realm: "TestRealm",
    clientId: "TestClient"
})
