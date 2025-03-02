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

import { Resource } from '../resource';
import { Client } from '../client';


declare class UserProfile extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  city: string;
  costCenter: string;
  countryCode: string;
  department: string;
  displayName: string;
  division: string;
  email: string;
  employeeNumber: string;
  firstName: string;
  honorificPrefix: string;
  honorificSuffix: string;
  lastName: string;
  locale: string;
  login: string;
  manager: string;
  managerId: string;
  middleName: string;
  mobilePhone: string;
  nickName: string;
  organization: string;
  postalAddress: string;
  preferredLanguage: string;
  primaryPhone: string;
  profileUrl: string;
  secondEmail: string;
  state: string;
  streetAddress: string;
  timezone: string;
  title: string;
  userType: string;
  zipCode: string;

}

export {
  UserProfile
};
