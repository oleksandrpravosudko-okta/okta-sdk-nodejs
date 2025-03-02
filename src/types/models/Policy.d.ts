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
import { Response } from 'node-fetch';
import { Collection } from '../collection';
import { PolicyRule } from './PolicyRule';
import { PolicyRuleConditions } from './PolicyRuleConditions';
import { PolicyType } from './PolicyType';

declare class Policy extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _embedded: {[name: string]: unknown};
  readonly _links: {[name: string]: unknown};
  conditions: PolicyRuleConditions;
  readonly created: string;
  description: string;
  readonly id: string;
  readonly lastUpdated: string;
  name: string;
  priority: number;
  status: string;
  system: boolean;
  type: PolicyType;

  update(): Promise<Policy>;
  delete(): Promise<Response>;
  activate(): Promise<Response>;
  deactivate(): Promise<Response>;
  listPolicyRules(): Collection<PolicyRule>;
  createRule(policyRule: PolicyRule): Promise<PolicyRule>;
  getPolicyRule(ruleId: string): Promise<PolicyRule>;
}

export {
  Policy
};
