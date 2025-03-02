/*!
 * Copyright (c) 2017-2021, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

import { Collection } from './collection';
import { Application } from './models/Application';
import { Response } from 'node-fetch';
import { Csr } from './models/Csr';
import { CsrMetadata } from './models/CsrMetadata';
import { JsonWebKey } from './models/JsonWebKey';
import { OAuth2ScopeConsentGrant } from './models/OAuth2ScopeConsentGrant';
import { ApplicationGroupAssignment } from './models/ApplicationGroupAssignment';
import { OAuth2Token } from './models/OAuth2Token';
import { AppUser } from './models/AppUser';
import { AuthorizationServer } from './models/AuthorizationServer';
import { OAuth2Claim } from './models/OAuth2Claim';
import { OAuth2Client } from './models/OAuth2Client';
import { OAuth2RefreshToken } from './models/OAuth2RefreshToken';
import { JwkUse } from './models/JwkUse';
import { AuthorizationServerPolicy } from './models/AuthorizationServerPolicy';
import { AuthorizationServerPolicyRule } from './models/AuthorizationServerPolicyRule';
import { OAuth2Scope } from './models/OAuth2Scope';
import { EventHook } from './models/EventHook';
import { Feature } from './models/Feature';
import { Group } from './models/Group';
import { GroupRule } from './models/GroupRule';
import { Role } from './models/Role';
import { AssignRoleRequest } from './models/AssignRoleRequest';
import { CatalogApplication } from './models/CatalogApplication';
import { User } from './models/User';
import { IdentityProvider } from './models/IdentityProvider';
import { IdentityProviderApplicationUser } from './models/IdentityProviderApplicationUser';
import { UserIdentityProviderLinkRequest } from './models/UserIdentityProviderLinkRequest';
import { SocialAuthToken } from './models/SocialAuthToken';
import { InlineHook } from './models/InlineHook';
import { InlineHookPayload } from './models/InlineHookPayload';
import { InlineHookResponse } from './models/InlineHookResponse';
import { LogEvent } from './models/LogEvent';
import { LinkedObject } from './models/LinkedObject';
import { UserType } from './models/UserType';
import { Policy } from './models/Policy';
import { PolicyRule } from './models/PolicyRule';
import { CreateSessionRequest } from './models/CreateSessionRequest';
import { Session } from './models/Session';
import { SmsTemplate } from './models/SmsTemplate';
import { TrustedOrigin } from './models/TrustedOrigin';
import { CreateUserRequest } from './models/CreateUserRequest';
import { AppLink } from './models/AppLink';
import { ChangePasswordRequest } from './models/ChangePasswordRequest';
import { UserCredentials } from './models/UserCredentials';
import { ForgotPasswordResponse } from './models/ForgotPasswordResponse';
import { UserFactor } from './models/UserFactor';
import { SecurityQuestion } from './models/SecurityQuestion';
import { ActivateFactorRequest } from './models/ActivateFactorRequest';
import { VerifyUserFactorResponse } from './models/VerifyUserFactorResponse';
import { VerifyFactorRequest } from './models/VerifyFactorRequest';
import { UserActivationToken } from './models/UserActivationToken';
import { TempPassword } from './models/TempPassword';
import { ResetPasswordToken } from './models/ResetPasswordToken';
import { ResponseLinks } from './models/ResponseLinks';

export declare class GeneratedApiClient {
  listApplications(queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    filter?: string,
    expand?: string,
    includeNonDeleted?: boolean,
  }): Collection<Application>;
  createApplication(application: Application, queryParameters?: {
    activate?: boolean,
  }): Promise<Application>;
  deleteApplication(appId: string): Promise<Response>;
  getApplication(appId: string, queryParameters?: {
    expand?: string,
  }): Promise<Application>;
  updateApplication(appId: string, application: Application): Promise<Application>;
  listCsrsForApplication(appId: string): Collection<Csr>;
  generateCsrForApplication(appId: string, csrMetadata: CsrMetadata): Promise<Csr>;
  revokeCsrFromApplication(appId: string, csrId: string): Promise<Response>;
  getCsrForApplication(appId: string, csrId: string): Promise<Csr>;
  publishCerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryCerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishDerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryDerCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryPemCert(appId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  listApplicationKeys(appId: string): Collection<JsonWebKey>;
  generateApplicationKey(appId: string, queryParameters?: {
    validityYears?: number,
  }): Promise<JsonWebKey>;
  getApplicationKey(appId: string, keyId: string): Promise<JsonWebKey>;
  cloneApplicationKey(appId: string, keyId: string, queryParameters: {
    targetAid: string,
  }): Promise<JsonWebKey>;
  listScopeConsentGrants(appId: string, queryParameters?: {
    expand?: string,
  }): Collection<OAuth2ScopeConsentGrant>;
  grantConsentToScope(appId: string, oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrant): Promise<OAuth2ScopeConsentGrant>;
  revokeScopeConsentGrant(appId: string, grantId: string): Promise<Response>;
  getScopeConsentGrant(appId: string, grantId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2ScopeConsentGrant>;
  listApplicationGroupAssignments(appId: string, queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    expand?: string,
  }): Collection<ApplicationGroupAssignment>;
  deleteApplicationGroupAssignment(appId: string, groupId: string): Promise<Response>;
  getApplicationGroupAssignment(appId: string, groupId: string, queryParameters?: {
    expand?: string,
  }): Promise<ApplicationGroupAssignment>;
  createApplicationGroupAssignment(appId: string, groupId: string, applicationGroupAssignment: ApplicationGroupAssignment): Promise<ApplicationGroupAssignment>;
  activateApplication(appId: string): Promise<Response>;
  deactivateApplication(appId: string): Promise<Response>;
  revokeOAuth2TokensForApplication(appId: string): Promise<Response>;
  listOAuth2TokensForApplication(appId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2Token>;
  revokeOAuth2TokenForApplication(appId: string, tokenId: string): Promise<Response>;
  getOAuth2TokenForApplication(appId: string, tokenId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2Token>;
  listApplicationUsers(appId: string, queryParameters?: {
    q?: string,
    query_scope?: string,
    after?: string,
    limit?: number,
    filter?: string,
    expand?: string,
  }): Collection<AppUser>;
  assignUserToApplication(appId: string, appUser: AppUser): Promise<AppUser>;
  deleteApplicationUser(appId: string, userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<Response>;
  getApplicationUser(appId: string, userId: string, queryParameters?: {
    expand?: string,
  }): Promise<AppUser>;
  updateApplicationUser(appId: string, userId: string, appUser: AppUser): Promise<AppUser>;
  listAuthorizationServers(queryParameters?: {
    q?: string,
    limit?: string,
    after?: string,
  }): Collection<AuthorizationServer>;
  createAuthorizationServer(authorizationServer: AuthorizationServer): Promise<AuthorizationServer>;
  deleteAuthorizationServer(authServerId: string): Promise<Response>;
  getAuthorizationServer(authServerId: string): Promise<AuthorizationServer>;
  updateAuthorizationServer(authServerId: string, authorizationServer: AuthorizationServer): Promise<AuthorizationServer>;
  listOAuth2Claims(authServerId: string): Collection<OAuth2Claim>;
  createOAuth2Claim(authServerId: string, oAuth2Claim: OAuth2Claim): Promise<OAuth2Claim>;
  deleteOAuth2Claim(authServerId: string, claimId: string): Promise<Response>;
  getOAuth2Claim(authServerId: string, claimId: string): Promise<OAuth2Claim>;
  updateOAuth2Claim(authServerId: string, claimId: string, oAuth2Claim: OAuth2Claim): Promise<OAuth2Claim>;
  listOAuth2ClientsForAuthorizationServer(authServerId: string): Collection<OAuth2Client>;
  revokeRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string): Promise<Response>;
  listRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2RefreshToken>;
  revokeRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string): Promise<Response>;
  getRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2RefreshToken>;
  listAuthorizationServerKeys(authServerId: string): Collection<JsonWebKey>;
  rotateAuthorizationServerKeys(authServerId: string, jwkUse: JwkUse): Collection<JsonWebKey>;
  activateAuthorizationServer(authServerId: string): Promise<Response>;
  deactivateAuthorizationServer(authServerId: string): Promise<Response>;
  listAuthorizationServerPolicies(authServerId: string): Collection<AuthorizationServerPolicy>;
  createAuthorizationServerPolicy(authServerId: string, authorizationServerPolicy: AuthorizationServerPolicy): Promise<AuthorizationServerPolicy>;
  deleteAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<Response>;
  getAuthorizationServerPolicy(authServerId: string, policyId: string): Promise<AuthorizationServerPolicy>;
  updateAuthorizationServerPolicy(authServerId: string, policyId: string, authorizationServerPolicy: AuthorizationServerPolicy): Promise<AuthorizationServerPolicy>;
  listAuthorizationServerPolicyRules(policyId: string, authServerId: string): Collection<AuthorizationServerPolicyRule>;
  createAuthorizationServerPolicyRule(policyId: string, authServerId: string, authorizationServerPolicyRule: AuthorizationServerPolicyRule): Promise<AuthorizationServerPolicyRule>;
  deleteAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string): Promise<Response>;
  getAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string): Promise<AuthorizationServerPolicyRule>;
  updateAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, authorizationServerPolicyRule: AuthorizationServerPolicyRule): Promise<AuthorizationServerPolicyRule>;
  listOAuth2Scopes(authServerId: string, queryParameters?: {
    q?: string,
    filter?: string,
    cursor?: string,
    limit?: number,
  }): Collection<OAuth2Scope>;
  createOAuth2Scope(authServerId: string, oAuth2Scope: OAuth2Scope): Promise<OAuth2Scope>;
  deleteOAuth2Scope(authServerId: string, scopeId: string): Promise<Response>;
  getOAuth2Scope(authServerId: string, scopeId: string): Promise<OAuth2Scope>;
  updateOAuth2Scope(authServerId: string, scopeId: string, oAuth2Scope: OAuth2Scope): Promise<OAuth2Scope>;
  listEventHooks(): Collection<EventHook>;
  createEventHook(eventHook: EventHook): Promise<EventHook>;
  deleteEventHook(eventHookId: string): Promise<Response>;
  getEventHook(eventHookId: string): Promise<EventHook>;
  updateEventHook(eventHookId: string, eventHook: EventHook): Promise<EventHook>;
  activateEventHook(eventHookId: string): Promise<EventHook>;
  deactivateEventHook(eventHookId: string): Promise<EventHook>;
  verifyEventHook(eventHookId: string): Promise<EventHook>;
  listFeatures(): Collection<Feature>;
  getFeature(featureId: string): Promise<Feature>;
  listFeatureDependencies(featureId: string): Collection<Feature>;
  listFeatureDependents(featureId: string): Collection<Feature>;
  updateFeatureLifecycle(featureId: string, lifecycle: string, queryParameters?: {
    mode?: string,
  }): Promise<Feature>;
  listGroups(queryParameters?: {
    q?: string,
    filter?: string,
    after?: string,
    limit?: number,
    expand?: string,
  }): Collection<Group>;
  createGroup(group: Group): Promise<Group>;
  listGroupRules(queryParameters?: {
    limit?: number,
    after?: string,
    search?: string,
    expand?: string,
  }): Collection<GroupRule>;
  createGroupRule(groupRule: GroupRule): Promise<GroupRule>;
  deleteGroupRule(ruleId: string): Promise<Response>;
  getGroupRule(ruleId: string, queryParameters?: {
    expand?: string,
  }): Promise<GroupRule>;
  updateGroupRule(ruleId: string, groupRule: GroupRule): Promise<GroupRule>;
  activateGroupRule(ruleId: string): Promise<Response>;
  deactivateGroupRule(ruleId: string): Promise<Response>;
  deleteGroup(groupId: string): Promise<Response>;
  getGroup(groupId: string): Promise<Group>;
  updateGroup(groupId: string, group: Group): Promise<Group>;
  listAssignedApplicationsForGroup(groupId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<Application>;
  listGroupAssignedRoles(groupId: string, queryParameters?: {
    expand?: string,
  }): Collection<Role>;
  assignRoleToGroup(groupId: string, assignRoleRequest: AssignRoleRequest, queryParameters?: {
    disableNotifications?: string,
  }): Promise<Role>;
  removeRoleFromGroup(groupId: string, roleId: string): Promise<Response>;
  getRole(groupId: string, roleId: string): Promise<Role>;
  listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<CatalogApplication>;
  removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string): Promise<Response>;
  addApplicationTargetToAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string): Promise<Response>;
  removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string): Promise<Response>;
  addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string): Promise<Response>;
  listGroupTargetsForGroupRole(groupId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<Group>;
  removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId: string, roleId: string, targetGroupId: string): Promise<Response>;
  addGroupTargetToGroupAdministratorRoleForGroup(groupId: string, roleId: string, targetGroupId: string): Promise<Response>;
  listGroupUsers(groupId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<User>;
  removeUserFromGroup(groupId: string, userId: string): Promise<Response>;
  addUserToGroup(groupId: string, userId: string): Promise<Response>;
  listIdentityProviders(queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    type?: string,
  }): Collection<IdentityProvider>;
  createIdentityProvider(identityProvider: IdentityProvider): Promise<IdentityProvider>;
  listIdentityProviderKeys(queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<JsonWebKey>;
  createIdentityProviderKey(jsonWebKey: JsonWebKey): Promise<JsonWebKey>;
  deleteIdentityProviderKey(keyId: string): Promise<Response>;
  getIdentityProviderKey(keyId: string): Promise<JsonWebKey>;
  deleteIdentityProvider(idpId: string): Promise<Response>;
  getIdentityProvider(idpId: string): Promise<IdentityProvider>;
  updateIdentityProvider(idpId: string, identityProvider: IdentityProvider): Promise<IdentityProvider>;
  listCsrsForIdentityProvider(idpId: string): Collection<Csr>;
  generateCsrForIdentityProvider(idpId: string, csrMetadata: CsrMetadata): Promise<Csr>;
  revokeCsrForIdentityProvider(idpId: string, csrId: string): Promise<Response>;
  getCsrForIdentityProvider(idpId: string, csrId: string): Promise<Csr>;
  publishCerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryCerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishDerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryDerCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryPemCertForIdentityProvider(idpId: string, csrId: string, certificate: string): Promise<JsonWebKey>;
  listIdentityProviderSigningKeys(idpId: string): Collection<JsonWebKey>;
  generateIdentityProviderSigningKey(idpId: string, queryParameters: {
    validityYears: number,
  }): Promise<JsonWebKey>;
  getIdentityProviderSigningKey(idpId: string, keyId: string): Promise<JsonWebKey>;
  cloneIdentityProviderKey(idpId: string, keyId: string, queryParameters: {
    targetIdpId: string,
  }): Promise<JsonWebKey>;
  activateIdentityProvider(idpId: string): Promise<IdentityProvider>;
  deactivateIdentityProvider(idpId: string): Promise<IdentityProvider>;
  listIdentityProviderApplicationUsers(idpId: string): Collection<IdentityProviderApplicationUser>;
  unlinkUserFromIdentityProvider(idpId: string, userId: string): Promise<Response>;
  getIdentityProviderApplicationUser(idpId: string, userId: string): Promise<IdentityProviderApplicationUser>;
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest): Promise<IdentityProviderApplicationUser>;
  listSocialAuthTokens(idpId: string, userId: string): Collection<SocialAuthToken>;
  listInlineHooks(queryParameters?: {
    type?: string,
  }): Collection<InlineHook>;
  createInlineHook(inlineHook: InlineHook): Promise<InlineHook>;
  deleteInlineHook(inlineHookId: string): Promise<Response>;
  getInlineHook(inlineHookId: string): Promise<InlineHook>;
  updateInlineHook(inlineHookId: string, inlineHook: InlineHook): Promise<InlineHook>;
  executeInlineHook(inlineHookId: string, inlineHookPayload: InlineHookPayload): Promise<InlineHookResponse>;
  activateInlineHook(inlineHookId: string): Promise<InlineHook>;
  deactivateInlineHook(inlineHookId: string): Promise<InlineHook>;
  getLogs(queryParameters?: {
    since?: string,
    until?: string,
    filter?: string,
    q?: string,
    limit?: number,
    sortOrder?: string,
    after?: string,
  }): Collection<LogEvent>;
  listLinkedObjectDefinitions(): Collection<LinkedObject>;
  addLinkedObjectDefinition(linkedObject: LinkedObject): Promise<LinkedObject>;
  deleteLinkedObjectDefinition(linkedObjectName: string): Promise<Response>;
  getLinkedObjectDefinition(linkedObjectName: string): Promise<LinkedObject>;
  listUserTypes(): Collection<UserType>;
  createUserType(userType: UserType): Promise<UserType>;
  deleteUserType(typeId: string): Promise<Response>;
  getUserType(typeId: string): Promise<UserType>;
  updateUserType(typeId: string, userType: UserType): Promise<UserType>;
  replaceUserType(typeId: string, userType: UserType): Promise<UserType>;
  listPolicies(queryParameters: {
    type: string,
    status?: string,
    expand?: string,
  }): Collection<AuthorizationServerPolicy>;
  createPolicy(policy: Policy, queryParameters?: {
    activate?: boolean,
  }): Promise<Policy>;
  deletePolicy(policyId: string): Promise<Response>;
  getPolicy(policyId: string, queryParameters?: {
    expand?: string,
  }): Promise<Policy>;
  updatePolicy(policyId: string, policy: Policy): Promise<Policy>;
  activatePolicy(policyId: string): Promise<Response>;
  deactivatePolicy(policyId: string): Promise<Response>;
  listPolicyRules(policyId: string): Collection<PolicyRule>;
  createPolicyRule(policyId: string, policyRule: PolicyRule): Promise<PolicyRule>;
  deletePolicyRule(policyId: string, ruleId: string): Promise<Response>;
  getPolicyRule(policyId: string, ruleId: string): Promise<PolicyRule>;
  updatePolicyRule(policyId: string, ruleId: string, policyRule: PolicyRule): Promise<PolicyRule>;
  activatePolicyRule(policyId: string, ruleId: string): Promise<Response>;
  deactivatePolicyRule(policyId: string, ruleId: string): Promise<Response>;
  createSession(createSessionRequest: CreateSessionRequest): Promise<Session>;
  endSession(sessionId: string): Promise<Response>;
  getSession(sessionId: string): Promise<Session>;
  refreshSession(sessionId: string): Promise<Session>;
  listSmsTemplates(queryParameters?: {
    templateType?: string,
  }): Collection<SmsTemplate>;
  createSmsTemplate(smsTemplate: SmsTemplate): Promise<SmsTemplate>;
  deleteSmsTemplate(templateId: string): Promise<Response>;
  getSmsTemplate(templateId: string): Promise<SmsTemplate>;
  partialUpdateSmsTemplate(templateId: string, smsTemplate: SmsTemplate): Promise<SmsTemplate>;
  updateSmsTemplate(templateId: string, smsTemplate: SmsTemplate): Promise<SmsTemplate>;
  listOrigins(queryParameters?: {
    q?: string,
    filter?: string,
    after?: string,
    limit?: number,
  }): Collection<TrustedOrigin>;
  createOrigin(trustedOrigin: TrustedOrigin): Promise<TrustedOrigin>;
  deleteOrigin(trustedOriginId: string): Promise<Response>;
  getOrigin(trustedOriginId: string): Promise<TrustedOrigin>;
  updateOrigin(trustedOriginId: string, trustedOrigin: TrustedOrigin): Promise<TrustedOrigin>;
  activateOrigin(trustedOriginId: string): Promise<TrustedOrigin>;
  deactivateOrigin(trustedOriginId: string): Promise<TrustedOrigin>;
  listUsers(queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    filter?: string,
    search?: string,
    sortBy?: string,
    sortOrder?: string,
  }): Collection<User>;
  createUser(createUserRequest: CreateUserRequest, queryParameters?: {
    activate?: boolean,
    provider?: boolean,
    nextLogin?: string,
  }): Promise<User>;
  setLinkedObjectForUser(associatedUserId: string, primaryRelationshipName: string, primaryUserId: string): Promise<Response>;
  deactivateOrDeleteUser(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<Response>;
  getUser(userId: string): Promise<User>;
  partialUpdateUser(userId: string, user: User, queryParameters?: {
    strict?: boolean,
  }): Promise<User>;
  updateUser(userId: string, user: User, queryParameters?: {
    strict?: boolean,
  }): Promise<User>;
  listAppLinks(userId: string): Collection<AppLink>;
  listUserClients(userId: string): Collection<OAuth2Client>;
  revokeGrantsForUserAndClient(userId: string, clientId: string): Promise<Response>;
  listGrantsForUserAndClient(userId: string, clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2ScopeConsentGrant>;
  revokeTokensForUserAndClient(userId: string, clientId: string): Promise<Response>;
  listRefreshTokensForUserAndClient(userId: string, clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2RefreshToken>;
  revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string): Promise<Response>;
  getRefreshTokenForUserAndClient(userId: string, clientId: string, tokenId: string, queryParameters?: {
    expand?: string,
    limit?: number,
    after?: string,
  }): Promise<OAuth2RefreshToken>;
  changePassword(userId: string, changePasswordRequest: ChangePasswordRequest, queryParameters?: {
    strict?: boolean,
  }): Promise<UserCredentials>;
  changeRecoveryQuestion(userId: string, userCredentials: UserCredentials): Promise<UserCredentials>;
  forgotPasswordGenerateOneTimeToken(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<ForgotPasswordResponse>;
  forgotPasswordSetNewPassword(userId: string, userCredentials: UserCredentials, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<ForgotPasswordResponse>;
  listFactors(userId: string): Collection<UserFactor>;
  enrollFactor(userId: string, userFactor: UserFactor, queryParameters?: {
    updatePhone?: boolean,
    templateId?: string,
    tokenLifetimeSeconds?: number,
    activate?: boolean,
  }): Promise<UserFactor>;
  listSupportedFactors(userId: string): Collection<UserFactor>;
  listSupportedSecurityQuestions(userId: string): Collection<SecurityQuestion>;
  deleteFactor(userId: string, factorId: string): Promise<Response>;
  getFactor(userId: string, factorId: string): Promise<UserFactor>;
  activateFactor(userId: string, factorId: string, activateFactorRequest: ActivateFactorRequest): Promise<UserFactor>;
  getFactorTransactionStatus(userId: string, factorId: string, transactionId: string): Promise<VerifyUserFactorResponse>;
  verifyFactor(userId: string, factorId: string, verifyFactorRequest: VerifyFactorRequest, queryParameters?: {
    templateId?: string,
    tokenLifetimeSeconds?: number,
  }): Promise<VerifyUserFactorResponse>;
  revokeUserGrants(userId: string): Promise<Response>;
  listUserGrants(userId: string, queryParameters?: {
    scopeId?: string,
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2ScopeConsentGrant>;
  revokeUserGrant(userId: string, grantId: string): Promise<Response>;
  getUserGrant(userId: string, grantId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2ScopeConsentGrant>;
  listUserGroups(userId: string): Collection<Group>;
  listUserIdentityProviders(userId: string): Collection<IdentityProvider>;
  activateUser(userId: string, queryParameters: {
    sendEmail: boolean,
  }): Promise<UserActivationToken>;
  deactivateUser(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<Response>;
  expirePassword(userId: string): Promise<User>;
  expirePasswordAndGetTemporaryPassword(userId: string): Promise<TempPassword>;
  reactivateUser(userId: string, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<UserActivationToken>;
  resetFactors(userId: string): Promise<Response>;
  resetPassword(userId: string, queryParameters: {
    sendEmail: boolean,
  }): Promise<ResetPasswordToken>;
  suspendUser(userId: string): Promise<Response>;
  unlockUser(userId: string): Promise<Response>;
  unsuspendUser(userId: string): Promise<Response>;
  removeLinkedObjectForUser(userId: string, relationshipName: string): Promise<Response>;
  getLinkedObjectsForUser(userId: string, relationshipName: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<ResponseLinks>;
  listAssignedRolesForUser(userId: string, queryParameters?: {
    expand?: string,
  }): Collection<Role>;
  assignRoleToUser(userId: string, assignRoleRequest: AssignRoleRequest, queryParameters?: {
    disableNotifications?: string,
  }): Promise<Role>;
  removeRoleFromUser(userId: string, roleId: string): Promise<Response>;
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<CatalogApplication>;
  addAllAppsAsTargetToRole(userId: string, roleId: string): Promise<Response>;
  removeApplicationTargetFromApplicationAdministratorRoleForUser(userId: string, roleId: string, appName: string): Promise<Response>;
  addApplicationTargetToAdminRoleForUser(userId: string, roleId: string, appName: string): Promise<Response>;
  removeApplicationTargetFromAdministratorRoleForUser(userId: string, roleId: string, appName: string, applicationId: string): Promise<Response>;
  addApplicationTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string): Promise<Response>;
  listGroupTargetsForRole(userId: string, roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<Group>;
  removeGroupTargetFromRole(userId: string, roleId: string, groupId: string): Promise<Response>;
  addGroupTargetToRole(userId: string, roleId: string, groupId: string): Promise<Response>;
  clearUserSessions(userId: string, queryParameters?: {
    oauthTokens?: boolean,
  }): Promise<Response>;
}
