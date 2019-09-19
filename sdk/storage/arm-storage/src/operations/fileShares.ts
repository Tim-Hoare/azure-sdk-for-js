/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/fileSharesMappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";

/** Class representing a FileShares. */
export class FileShares {
  private readonly client: StorageManagementClientContext;

  /**
   * Create a FileShares.
   * @param {StorageManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all shares.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesListResponse>
   */
  list(resourceGroupName: string, accountName: string, options?: Models.FileSharesListOptionalParams): Promise<Models.FileSharesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.FileShareItems>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, options: Models.FileSharesListOptionalParams, callback: msRest.ServiceCallback<Models.FileShareItems>): void;
  list(resourceGroupName: string, accountName: string, options?: Models.FileSharesListOptionalParams | msRest.ServiceCallback<Models.FileShareItems>, callback?: msRest.ServiceCallback<Models.FileShareItems>): Promise<Models.FileSharesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FileSharesListResponse>;
  }

  /**
   * Creates a new share under the specified account as described by request body. The share resource
   * includes metadata and properties for that share. It does not include a list of the files
   * contained by the share.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, shareName: string, options?: Models.FileSharesCreateOptionalParams): Promise<Models.FileSharesCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, shareName: string, callback: msRest.ServiceCallback<Models.FileShare>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, shareName: string, options: Models.FileSharesCreateOptionalParams, callback: msRest.ServiceCallback<Models.FileShare>): void;
  create(resourceGroupName: string, accountName: string, shareName: string, options?: Models.FileSharesCreateOptionalParams | msRest.ServiceCallback<Models.FileShare>, callback?: msRest.ServiceCallback<Models.FileShare>): Promise<Models.FileSharesCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.FileSharesCreateResponse>;
  }

  /**
   * Updates share properties as specified in request body. Properties not mentioned in the request
   * will not be changed. Update fails if the specified share does not already exist.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, shareName: string, options?: Models.FileSharesUpdateOptionalParams): Promise<Models.FileSharesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, shareName: string, callback: msRest.ServiceCallback<Models.FileShare>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, shareName: string, options: Models.FileSharesUpdateOptionalParams, callback: msRest.ServiceCallback<Models.FileShare>): void;
  update(resourceGroupName: string, accountName: string, shareName: string, options?: Models.FileSharesUpdateOptionalParams | msRest.ServiceCallback<Models.FileShare>, callback?: msRest.ServiceCallback<Models.FileShare>): Promise<Models.FileSharesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.FileSharesUpdateResponse>;
  }

  /**
   * Gets properties of a specified share.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesGetResponse>
   */
  get(resourceGroupName: string, accountName: string, shareName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileSharesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, shareName: string, callback: msRest.ServiceCallback<Models.FileShare>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, shareName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FileShare>): void;
  get(resourceGroupName: string, accountName: string, shareName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FileShare>, callback?: msRest.ServiceCallback<Models.FileShare>): Promise<Models.FileSharesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FileSharesGetResponse>;
  }

  /**
   * Deletes specified share under its account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param shareName The name of the file share within the specified storage account. File share
   * names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash
   * (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   * number.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, shareName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists all shares.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FileSharesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FileShareItems>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FileShareItems>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FileShareItems>, callback?: msRest.ServiceCallback<Models.FileShareItems>): Promise<Models.FileSharesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.FileSharesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileShareItems
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      metadata: [
        "options",
        "metadata"
      ],
      shareQuota: [
        "options",
        "shareQuota"
      ]
    },
    mapper: {
      ...Mappers.FileShare,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    201: {
      bodyMapper: Mappers.FileShare
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      metadata: [
        "options",
        "metadata"
      ],
      shareQuota: [
        "options",
        "shareQuota"
      ]
    },
    mapper: {
      ...Mappers.FileShare,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileShareItems
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};