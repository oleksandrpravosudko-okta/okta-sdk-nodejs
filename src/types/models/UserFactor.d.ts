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
import { ActivateFactorRequest } from './ActivateFactorRequest';
import { VerifyFactorRequest } from './VerifyFactorRequest';
import { VerifyUserFactorResponse } from './VerifyUserFactorResponse';
import { Response } from 'node-fetch';
import { FactorType } from './FactorType';
import { FactorProvider } from './FactorProvider';
import { FactorStatus } from './FactorStatus';

declare class UserFactor extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _embedded: {[name: string]: unknown};
  readonly _links: {[name: string]: unknown};
  readonly created: string;
  factorType: FactorType;
  readonly id: string;
  readonly lastUpdated: string;
  provider: FactorProvider;
  readonly status: FactorStatus;
  _verify: VerifyFactorRequest;

  delete(): Promise<Response>;
  activate(activateFactorRequest: ActivateFactorRequest): Promise<UserFactor>;
  verify(verifyFactorRequest: VerifyFactorRequest, queryParameters?: {
    templateId?: string,
    tokenLifetimeSeconds?: number,
  }): Promise<VerifyUserFactorResponse>;
}

export {
  UserFactor
};
