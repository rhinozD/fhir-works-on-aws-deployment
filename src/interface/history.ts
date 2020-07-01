export interface InstanceHistoryRequest extends TypeHistoryRequest {
    id: string;
}

export interface TypeHistoryRequest extends GlobalHistoryRequest {
    resourceType: string;
}

export interface GlobalHistoryRequest {
    queryParams?: any;
}

export interface HistoryResponse {
    success: boolean;
    result: HistoryResult;
}

export interface HistoryResult {
    hasPreviousResult: boolean;
    hasNextResult: boolean;
    numberOfResults: number;
    resources: any;
    message: string;
}

export interface History {
    /**
     * History interaction retrieves the history of a particular resource
     * Should be thought of as a 'search' of older versioned resources
     */
    instanceHistory(request: InstanceHistoryRequest): Promise<HistoryResponse>;
    /**
     * History interaction retrieves the history of all resources of a given type
     * Should be thought of as a 'search' of older versioned resources
     */
    typeHistory(request: TypeHistoryRequest): Promise<HistoryResponse>;
    /**
     * History interaction retrieves the history of all resources supported by the system.
     * Should be thought of as a 'search' of older versioned resources
     */
    globalHistory(request: GlobalHistoryRequest): Promise<HistoryResponse>;
}