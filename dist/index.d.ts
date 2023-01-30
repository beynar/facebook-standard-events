declare namespace FB_STANDARDS_EVENTS {
    type EVENTS = "ADD_TO_CART" /** When a product is added to the shopping cart. */ | "ADD_TO_WISHLIST" /** When a product is added to a wishlist. */ | "COMPLETE_REGISTRATION" /** When a registration form is completed. */ | "CONTACT" /** When a person initiates contact with your business via telephone, SMS, email, chat, etc. */ | "CUSTOMIZE_PRODUCT" /** When a person customizes a product. */ | "FIND_LOCATION" /** When a person searches for a location of your store via a website or app, with an intention to visit the physical location. */ | "INITIATE_CHECKOUT" /** When a person enters the checkout flow prior to completing the checkout flow. */ | "LEAD" /** When a sign up is completed. */ | "PURCHASE" /** When a purchase is made or checkout flow is completed. */ | "SCHEDULE" /** When a person books an appointment to visit one of your locations. */ | "SEARCH" /** When a search is made. */ | "START_TRIAL" /** When a person starts a free trial of a product or service you offer. */ | "SUBMIT_APPLICATION" /** When a person applies for a product, service, or program you offer. */ | "SUBSCRIBE" /** When a person applies to a start a paid subscription for a product or service you offer. */;
    /** When a product is added to the shopping cart. */
    /** A person clicks on an add to cart button. */
    type ADD_TO_CART = {
        /** Product IDs associated with the event, such as SKUs (e.g. ['ABC123', 'XYZ789']). */
        content_ids: string[] | string[];
        /** Name of the page/product. */
        content_name: string;
        /** Either product or product_group based on the content_ids or contents being passed. If the IDs being passed in content_ids or contents parameter are IDs of products then the value should be product. If product group IDs are being passed, then the value should be product_group. */
        content_type: string;
        /** An array of JSON objects that contains the quantity and the International Article Number (EAN) when applicable, or other product or content identifier(s). id and quantity are the required fields. e.g. [{'id': 'ABC123', 'quantity': 2}, {'id': 'XYZ789', 'quantity': 2}]. */
        contents: Record<string, any>[];
        /** The currency for the value specified. */
        currency: string;
    };
    /** When a product is added to a wishlist. */
    /** A person clicks on an add to wishlist button. */
    type ADD_TO_WISHLIST = {
        /** Name of the page/product. */
        content_name: string;
        /** Product IDs associated with the event, such as SKUs (e.g. ['ABC123', 'XYZ789']). */
        content_ids: string[] | string[];
        /** An array of JSON objects that contains the quantity and the International Article Number (EAN) when applicable, or other product or content identifier(s). id and quantity are the required fields. e.g. [{'id': 'ABC123', 'quantity': 2}, {'id': 'XYZ789', 'quantity': 2}]. */
        contents: Record<string, any>[];
        /** The currency for the value specified. */
        currency: string;
    };
    /** When a registration form is completed. */
    /** A person submits a completed subscription or signup form. */
    type COMPLETE_REGISTRATION = {
        /** Name of the page/product. */
        content_name: string;
        /** The currency for the value specified. */
        currency: string;
        /** Used with the CompleteRegistration event, to show the status of the registration. */
        status: boolean;
    };
    /** When a person enters the checkout flow prior to completing the checkout flow. */
    /** A person clicks on a checkout button. */
    type INITIATE_CHECKOUT = {
        /** Product IDs associated with the event, such as SKUs (e.g. ['ABC123', 'XYZ789']). */
        content_ids: string[] | string[];
        /** An array of JSON objects that contains the quantity and the International Article Number (EAN) when applicable, or other product or content identifier(s). id and quantity are the required fields. e.g. [{'id': 'ABC123', 'quantity': 2}, {'id': 'XYZ789', 'quantity': 2}]. */
        contents: Record<string, any>[];
        /** The currency for the value specified. */
        currency: string;
        /** Used with InitiateCheckout event. The number of items when checkout was initiated. */
        num_items: string;
    };
    /** When a sign up is completed. */
    /** A person clicks on pricing. */
    type LEAD = {
        /** Name of the page/product. */
        content_name: string;
        /** The currency for the value specified. */
        currency: string;
    };
    /** When a purchase is made or checkout flow is completed. */
    /** A person has finished the purchase or checkout flow and lands on thank you or confirmation page. */
    type PURCHASE = {
        /** Product IDs associated with the event, such as SKUs (e.g. ['ABC123', 'XYZ789']). */
        content_ids: string[] | string[];
        /** Name of the page/product. */
        content_name: string;
        /** Either product or product_group based on the content_ids or contents being passed. If the IDs being passed in content_ids or contents parameter are IDs of products then the value should be product. If product group IDs are being passed, then the value should be product_group. */
        content_type: string;
        /** An array of JSON objects that contains the quantity and the International Article Number (EAN) when applicable, or other product or content identifier(s). id and quantity are the required fields. e.g. [{'id': 'ABC123', 'quantity': 2}, {'id': 'XYZ789', 'quantity': 2}]. */
        contents: Record<string, any>[];
        /** The currency for the value specified. */
        currency: string;
        /** Used with InitiateCheckout event. The number of items when checkout was initiated. */
        num_items: string;
    };
    /** When a search is made. */
    /** A person searches for a product on your website. */
    type SEARCH = {
        /** Product IDs associated with the event, such as SKUs (e.g. ['ABC123', 'XYZ789']). */
        content_ids: string[] | string[];
        /** An array of JSON objects that contains the quantity and the International Article Number (EAN) when applicable, or other product or content identifier(s). id and quantity are the required fields. e.g. [{'id': 'ABC123', 'quantity': 2}, {'id': 'XYZ789', 'quantity': 2}]. */
        contents: Record<string, any>[];
        /** The currency for the value specified. */
        currency: string;
        /** Used with the Search event. The string entered by the user for the search. */
        search_string: string;
        /** Either product or product_group based on the content_ids or contents being passed. If the IDs being passed in content_ids or contents parameter are IDs of products then the value should be product. If product group IDs are being passed, then the value should be product_group. */
        content_type: string;
    };
    /** When a person starts a free trial of a product or service you offer. */
    /** A person selects a free week of your game. */
    type START_TRIAL = {
        /** The currency for the value specified. */
        currency: string;
        /** Predicted lifetime value of a subscriber as defined by the advertiser and expressed as an exact value. */
        predicted_ltv: string | number;
    };
    /** When a person applies to a start a paid subscription for a product or service you offer. */
    /** A person subscribes to your streaming service. */
    type SUBSCRIBE = {
        /** The currency for the value specified. */
        currency: string;
        /** Predicted lifetime value of a subscriber as defined by the advertiser and expressed as an exact value. */
        predicted_ltv: string | number;
    };
    type Params<T extends FB_STANDARDS_EVENTS.EVENTS> = T extends "ADD_TO_CART" ? FB_STANDARDS_EVENTS.ADD_TO_CART : T extends "ADD_TO_WISHLIST" ? FB_STANDARDS_EVENTS.ADD_TO_WISHLIST : T extends "COMPLETE_REGISTRATION" ? FB_STANDARDS_EVENTS.COMPLETE_REGISTRATION : T extends "INITIATE_CHECKOUT" ? FB_STANDARDS_EVENTS.INITIATE_CHECKOUT : T extends "LEAD" ? FB_STANDARDS_EVENTS.LEAD : T extends "PURCHASE" ? FB_STANDARDS_EVENTS.PURCHASE : T extends "SEARCH" ? FB_STANDARDS_EVENTS.SEARCH : T extends "START_TRIAL" ? FB_STANDARDS_EVENTS.START_TRIAL : T extends "SUBSCRIBE" ? FB_STANDARDS_EVENTS.SUBSCRIBE : never;
}

export { FB_STANDARDS_EVENTS as default };
