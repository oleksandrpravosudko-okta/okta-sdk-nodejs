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

export interface OktaResponseHeadersReturnType {
  [key: string]: string | number | undefined,
  'x-okta-request-id'?: string,
  'x-rate-limit-limit'?: number,
  'x-rate-limit-remaining'?: number,
  'x-rate-limit-reset'?: number
}

export declare function OktaResponseHeaders(responseHeadersMap: Record<string, unknown>): OktaResponseHeadersReturnType;
