import { listDomains } from "../catalog/operation-catalog.js";
import { InfomaniakError } from "../client/errors.js";
import type { MailDraftPayload, MailMoveMessagesPayload } from "../client/mail-application.js";
import {
  booleanParam,
  buildUploadFileRequest,
  customAction,
  discoveryActions,
  field,
  integerParam,
  mailIncludedOptions,
  mailMessageOptions,
  mailRequestOptions,
  mailThreadOptions,
  operationAction,
  optionalQuery,
  optionalRecord,
  optionalString,
  recordString,
  requiredInteger,
  requiredRecord,
  requiredString,
  responseItems,
  withSignal,
} from "./domain-action-helpers.js";
import type {
  DomainActionDefinition,
  DomainActionExecutionResult,
  DomainActionListOptions,
  DomainActionMetadata,
  DomainActionRequest,
  DomainWorkflowClient,
  DomainWorkflowRuntimeClient,
} from "./domain-action-types.js";
export type {
  DomainActionExecutionResult,
  DomainActionInputField,
  DomainActionListOptions,
  DomainActionMetadata,
  DomainActionRequest,
  DomainWorkflowClient,
  DomainWorkflowRuntimeClient,
} from "./domain-action-types.js";

const rootFileId = 1;

const staticActions: readonly DomainActionDefinition[] = [
  operationAction({
    domain: "account",
    action: "listAccounts",
    operationId: "Core/ResourcesListAccounts",
    summary: "List accounts visible to the current token.",
    description: "Read Infomaniak accounts that can be used as parents for product-specific discovery.",
  }),
  operationAction({
    domain: "account",
    action: "getAccount",
    operationId: "Core/ResourcesDisplayAnAccount",
    summary: "Read one account.",
    description: "Read one Infomaniak account by account identifier.",
    input: [field("account_id", "number", true, "Infomaniak account identifier.")],
    buildRequest: (input, signal) => withSignal({ path: { account_id: requiredInteger(input, "account_id") } }, signal),
  }),
  operationAction({
    domain: "account",
    action: "listAccountProducts",
    operationId: "Core/ResourcesListAccountsProducts",
    summary: "List products for one account.",
    description: "Read product references attached to one Infomaniak account.",
    input: [
      field("account_id", "number", true, "Infomaniak account identifier."),
      field("with", "string", false, "Optional related resources to include."),
      field("filter", "object", false, "Optional product filter object."),
    ],
    buildRequest: (input, signal) =>
      withSignal({ path: { account_id: requiredInteger(input, "account_id") }, query: optionalQuery({ with: optionalString(input, "with"), filter: optionalRecord(input, "filter") }) }, signal),
  }),
  operationAction({
    domain: "ai",
    action: "listProducts",
    operationId: "AI/ToolsListAllYourLLMAPI",
    summary: "List AI products.",
    description: "Read Infomaniak AI products available to the current token.",
  }),
  operationAction({
    domain: "ai",
    action: "listModels",
    operationId: "AI/ToolsListModels",
    summary: "List AI models.",
    description: "Read AI models available through the Infomaniak AI API.",
  }),
  operationAction({
    domain: "ai",
    action: "createChatCompletion",
    operationId: "AI/ToolsCreateChatCompletionV2",
    summary: "Create an AI chat completion.",
    description: "Call the OpenAI-compatible Infomaniak chat completions route for one AI product.",
    input: [
      field("product_id", "number", true, "AI product identifier."),
      field("body", "object", true, "Chat completion payload."),
    ],
    buildRequest: (input, signal) => withSignal({ path: { product_id: requiredInteger(input, "product_id") }, body: requiredRecord(input, "body") }, signal),
  }),
  operationAction({
    domain: "ai",
    action: "createEmbedding",
    operationId: "AI/ToolsCreateEmbeddingsV2",
    summary: "Create AI embeddings.",
    description: "Call the OpenAI-compatible Infomaniak embeddings route for one AI product.",
    input: [
      field("product_id", "number", true, "AI product identifier."),
      field("body", "object", true, "Embedding payload."),
    ],
    buildRequest: (input, signal) => withSignal({ path: { product_id: requiredInteger(input, "product_id") }, body: requiredRecord(input, "body") }, signal),
  }),
  operationAction({
    domain: "core",
    action: "listProducts",
    operationId: "get_1_products",
    summary: "List shared Infomaniak product references.",
    description: "Read product references from the shared core API.",
  }),
  operationAction({
    domain: "core",
    action: "currentMyKSuite",
    operationId: "Core/ResourcesCurrentMyKSuite",
    summary: "Read the current user's kSuite context.",
    description: "Read the current MyKSuite context from the shared core API.",
    input: [field("with", "string", false, "Optional related resources to include.")],
    buildRequest: (input, signal) => withSignal({ query: optionalQuery({ with: optionalString(input, "with") }) }, signal),
  }),
  operationAction({
    domain: "core",
    action: "listTasks",
    operationId: "Core/ResourcesListTasks",
    summary: "List async tasks.",
    description: "Read shared Infomaniak asynchronous tasks.",
  }),
  operationAction({
    domain: "core",
    action: "getTask",
    operationId: "Core/ResourcesDisplayATask",
    summary: "Read one async task.",
    description: "Read one shared Infomaniak asynchronous task by UUID.",
    input: [field("task_uuid", "string", true, "Async task UUID.")],
    buildRequest: (input, signal) => withSignal({ path: { task_uuid: requiredString(input, "task_uuid") } }, signal),
  }),
  operationAction({
    domain: "domains",
    action: "listDomains",
    operationId: "Domain/&/ZoneListDomainsV2",
    summary: "List managed domain names.",
    description: "Read managed domain names, optionally scoped to one account.",
    input: [
      field("account_id", "number", false, "Optional account identifier."),
      field("search", "string", false, "Optional search text."),
    ],
    buildRequest: (input, signal) => withSignal({ query: optionalQuery({ account_id: integerParam(input.account_id), search: optionalString(input, "search") }) }, signal),
  }),
  operationAction({
    domain: "domains",
    action: "getDomain",
    operationId: "Domain/&/ZoneShowDomainV2",
    summary: "Read one managed domain.",
    description: "Read one managed domain name by DNS name.",
    input: [field("domain", "string", true, "Managed domain name.")],
    buildRequest: (input, signal) => withSignal({ path: { domain: requiredString(input, "domain") } }, signal),
  }),
  operationAction({
    domain: "domains",
    action: "listZones",
    operationId: "Domain/&/ZoneListZonesV2",
    summary: "List zones for one domain.",
    description: "Read DNS zones attached to one managed domain name.",
    input: [
      field("domain", "string", true, "Managed domain name."),
      field("return", "string", false, "Optional return mode accepted by the API."),
    ],
    buildRequest: (input, signal) => withSignal({ path: { domain: requiredString(input, "domain") }, query: optionalQuery({ return: optionalString(input, "return") }) }, signal),
  }),
  operationAction({
    domain: "domains",
    action: "listDnsRecords",
    operationId: "Domain/&/ZoneListDnsRecordsV2",
    summary: "List DNS records for one zone.",
    description: "Read DNS records for a known zone identifier.",
    input: [
      field("zone", "string", true, "DNS zone identifier."),
      field("with", "string", false, "Optional related resources to include."),
      field("filter", "object", false, "Optional DNS record filter object."),
      field("search", "string", false, "Optional search text."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        { path: { zone: requiredString(input, "zone") }, query: optionalQuery({ with: optionalString(input, "with"), filter: optionalRecord(input, "filter"), search: optionalString(input, "search") }) },
        signal,
      ),
  }),
  operationAction({
    domain: "etickets",
    action: "listDates",
    operationId: "EticketsListDatesV2",
    summary: "List eTicket dates.",
    description: "Read eTicket date resources.",
    input: [field("with", "string", false, "Optional related resources to include.")],
    buildRequest: (input, signal) => withSignal({ query: optionalQuery({ with: optionalString(input, "with") }) }, signal),
  }),
  operationAction({
    domain: "etickets",
    action: "getReservation",
    operationId: "EticketsGetReservationV2",
    summary: "Read one eTicket reservation.",
    description: "Read one eTicket reservation by identifier.",
    input: [
      field("reservation_id", "number", true, "Reservation identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) => withSignal({ path: { reservation_id: requiredInteger(input, "reservation_id") }, query: optionalQuery({ with: optionalString(input, "with") }) }, signal),
  }),
  operationAction({
    domain: "etickets",
    action: "editTicket",
    operationId: "EticketsEditTicketV2",
    summary: "Edit an eTicket.",
    description: "Apply a documented eTicket ticket edit payload.",
    input: [field("body", "object", true, "Ticket edit payload.")],
    buildRequest: (input, signal) => withSignal({ body: requiredRecord(input, "body") }, signal),
  }),
  operationAction({
    domain: "kmeet",
    action: "createRoom",
    operationId: "post_1_kmeet_rooms",
    summary: "Create a kMeet room.",
    description: "Create or plan a kMeet conference room.",
    input: [field("body", "object", true, "kMeet room payload.")],
    buildRequest: (input, signal) => withSignal({ body: requiredRecord(input, "body") }, signal),
  }),
  operationAction({
    domain: "kmeet",
    action: "getRoomSettings",
    operationId: "get_1_kmeet_rooms_room_id_settings",
    summary: "Read kMeet room settings.",
    description: "Read settings for a known kMeet room identifier.",
    input: [field("room_id", "string", true, "kMeet room identifier.")],
    buildRequest: (input, signal) => withSignal({ path: { room_id: requiredString(input, "room_id") } }, signal),
  }),
  operationAction({
    domain: "newsletter",
    action: "showDomain",
    operationId: "NewsletterShowDomain",
    summary: "Read one Newsletter domain.",
    description: "Read one Newsletter domain by the integer domain identifier used by the API.",
    input: [
      field("domain", "number", true, "Newsletter Domain integer identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) => withSignal({ path: { domain: requiredInteger(input, "domain") }, query: optionalQuery({ with: optionalString(input, "with") }) }, signal),
  }),
  operationAction({
    domain: "newsletter",
    action: "listCampaigns",
    operationId: "NewsletterListCampaigns",
    summary: "List Newsletter campaigns.",
    description: "Read campaigns for one Newsletter Domain identifier.",
    input: [
      field("domain", "number", true, "Newsletter Domain integer identifier."),
      field("with", "string", false, "Optional related resources to include."),
      field("filter", "object", false, "Optional campaign filter object."),
    ],
    buildRequest: (input, signal) =>
      withSignal({ path: { domain: requiredInteger(input, "domain") }, query: optionalQuery({ with: optionalString(input, "with"), filter: optionalRecord(input, "filter") }) }, signal),
  }),
  operationAction({
    domain: "newsletter",
    action: "listSubscribers",
    operationId: "NewsletterListSubscribers",
    summary: "List Newsletter subscribers.",
    description: "Read subscribers for one Newsletter Domain identifier.",
    input: [
      field("domain", "number", true, "Newsletter Domain integer identifier."),
      field("with", "string", false, "Optional related resources to include."),
      field("filter", "object", false, "Optional subscriber filter object."),
    ],
    buildRequest: (input, signal) =>
      withSignal({ path: { domain: requiredInteger(input, "domain") }, query: optionalQuery({ with: optionalString(input, "with"), filter: optionalRecord(input, "filter") }) }, signal),
  }),
  operationAction({
    domain: "newsletter",
    action: "createSubscriber",
    operationId: "NewsletterCreateSubscriber",
    summary: "Create a Newsletter subscriber.",
    description: "Create a subscriber for one Newsletter Domain identifier.",
    input: [
      field("domain", "number", true, "Newsletter Domain integer identifier."),
      field("body", "object", true, "Subscriber creation payload."),
    ],
    buildRequest: (input, signal) => withSignal({ path: { domain: requiredInteger(input, "domain") }, body: requiredRecord(input, "body") }, signal),
  }),
  operationAction({
    domain: "profile",
    action: "getProfile",
    operationId: "Core/ResourcesListUserInformationV2",
    summary: "Read current profile information.",
    description: "Read profile information for the current token.",
    input: [field("with", "string", false, "Optional related resources to include.")],
    buildRequest: (input, signal) => withSignal({ query: optionalQuery({ with: optionalString(input, "with") }) }, signal),
  }),
  operationAction({
    domain: "profile",
    action: "listEmails",
    operationId: "Core/ResourcesListEmailsV2",
    summary: "List profile email addresses.",
    description: "Read email addresses attached to the current profile.",
  }),
  operationAction({
    domain: "profile",
    action: "listPhones",
    operationId: "Core/ResourcesListPhonesV2",
    summary: "List profile phone numbers.",
    description: "Read phone numbers attached to the current profile.",
  }),
  operationAction({
    domain: "kdrive",
    action: "listAccessibleDrives",
    operationId: "kDriveAccessiblesDrivesV2",
    summary: "List kDrive drives available to the current token.",
    description: "Read accessible kDrive drives before navigating files or uploading content.",
    input: [
      field("account_id", "number", true, "Infomaniak account identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) => ({
      ...withSignal({
        query: optionalQuery({ account_id: requiredInteger(input, "account_id"), with: optionalString(input, "with") }),
      }, signal),
    }),
  }),
  operationAction({
    domain: "kdrive",
    action: "getUserPreferences",
    operationId: "kDriveGetUsersPreferenceV2",
    summary: "Read the current user's kDrive preferences.",
    description: "Read user-level kDrive preferences such as the default drive when the API returns it.",
  }),
  operationAction({
    domain: "kdrive",
    action: "getDrive",
    operationId: "kDriveGetDriveInformationV2",
    summary: "Read kDrive drive information.",
    description: "Verify one kDrive drive identifier and read its metadata.",
    input: [field("drive_id", "number", true, "Drive identifier.")],
    buildRequest: (input, signal) => withSignal({ path: { drive_id: requiredInteger(input, "drive_id") } }, signal),
  }),
  operationAction({
    domain: "kdrive",
    action: "getFile",
    operationId: "kDriveGetFileDirectoryV3",
    summary: "Read one kDrive file or directory.",
    description: "Verify one file or directory identifier inside a drive.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("file_id", "number", true, "File or directory identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id"), file_id: requiredInteger(input, "file_id") },
          query: optionalQuery({ with: optionalString(input, "with") }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "kdrive",
    action: "listDirectory",
    operationId: "kDriveGetFilesInDirectoryV3",
    summary: "List files in a kDrive directory.",
    description: "Read children of a kDrive directory. Use file_id 1 for the root listing.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("file_id", "number", false, "Directory identifier. Defaults to root file id 1."),
      field("limit", "number", false, "Maximum number of children requested from the API."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id"), file_id: integerParam(input.file_id) ?? rootFileId },
          query: optionalQuery({ limit: integerParam(input.limit), with: optionalString(input, "with") }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "kdrive",
    action: "resolveChildByName",
    operationId: "kDriveGetSubFiledirectoryByFilenameV3",
    summary: "Resolve a kDrive child by name.",
    description: "Find one direct child file or directory by name under a known parent directory.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("file_id", "number", false, "Parent directory identifier. Defaults to root file id 1."),
      field("name", "string", true, "Child file or directory name."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id"), file_id: integerParam(input.file_id) ?? rootFileId },
          query: optionalQuery({ name: requiredString(input, "name"), with: optionalString(input, "with") }),
        },
        signal,
      ),
  }),
  customAction({
    domain: "kdrive",
    action: "findPrivateFolder",
    operationIds: ["kDriveGetFilesInDirectoryV3"],
    summary: "Find the top-level Private folder in a kDrive.",
    description: "List the root directory and return the first top-level child named Private.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    mutating: false,
    run: async (client, input, signal) => {
      const response = await client.requestOperation("kDriveGetFilesInDirectoryV3", {
        ...withSignal(
          {
            path: { drive_id: requiredInteger(input, "drive_id"), file_id: rootFileId },
            query: optionalQuery({ with: optionalString(input, "with") }),
          },
          signal,
        ),
      });
      const folder = responseItems(response).find((item) => recordString(item, "name") === "Private");
      if (!folder) {
        throw new InfomaniakError("Could not find a top-level kDrive folder named Private.");
      }
      return folder;
    },
  }),
  operationAction({
    domain: "kdrive",
    action: "createDirectory",
    operationId: "kDriveCreateDirectoryV3",
    summary: "Create a kDrive directory.",
    description: "Create a directory under an existing parent directory.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("file_id", "number", true, "Parent directory identifier."),
      field("body", "object", true, "Create-directory request body accepted by the Infomaniak API."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id"), file_id: requiredInteger(input, "file_id") },
          query: optionalQuery({ with: optionalString(input, "with") }),
          body: requiredRecord(input, "body"),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "kdrive",
    action: "createDefaultFile",
    operationId: "kDriveCreateDefaultFileV3",
    summary: "Create a default kDrive document file.",
    description: "Create an empty supported document file under an existing parent directory.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("file_id", "number", true, "Parent directory identifier."),
      field("body", "object", true, "Create-file request body accepted by the Infomaniak API."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id"), file_id: requiredInteger(input, "file_id") },
          query: optionalQuery({ with: optionalString(input, "with") }),
          body: requiredRecord(input, "body"),
        },
        signal,
      ),
  }),
  customAction({
    domain: "kdrive",
    action: "uploadFile",
    operationIds: ["kDriveUploadV3"],
    summary: "Upload file bytes to kDrive.",
    description: "Upload file content from a local path or direct body to a kDrive destination using the documented v3 upload route.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("body", "binary", false, "File bytes as a BodyInit-compatible value."),
      field("file_path", "string", false, "Absolute local file path to read and upload."),
      field("total_size", "number", false, "Total uploaded byte size. Required for direct body uploads and validated for file_path uploads."),
      field("file_name", "string", false, "Remote file name."),
      field("directory_id", "number", false, "Destination directory identifier."),
      field("directory_path", "string", false, "Destination directory path."),
      field("conflict", "string", false, "Conflict handling mode accepted by the API."),
    ],
    mutating: true,
    run: async (client, input, signal) => client.requestOperation("kDriveUploadV3", withSignal(await buildUploadFileRequest(input), signal)),
  }),
  operationAction({
    domain: "publicCloud",
    action: "listPublicClouds",
    operationId: "Public/CloudListAllPublicClouds",
    summary: "List Public Cloud products.",
    description: "Read Public Cloud products visible under one account.",
    input: [
      field("account_id", "number", true, "Infomaniak account identifier."),
      field("with", "string", false, "Optional related resources to include."),
      field("filter", "object", false, "Optional Public Cloud filter object."),
    ],
    buildRequest: (input, signal) =>
      withSignal({ query: optionalQuery({ account_id: requiredInteger(input, "account_id"), with: optionalString(input, "with"), filter: optionalRecord(input, "filter") }) }, signal),
  }),
  operationAction({
    domain: "publicCloud",
    action: "listProjects",
    operationId: "Public/CloudListProjects",
    summary: "List Public Cloud projects.",
    description: "Read projects for one Public Cloud product.",
    input: [
      field("public_cloud_id", "number", true, "Public Cloud product identifier."),
      field("with", "string", false, "Optional related resources to include."),
      field("filter", "object", false, "Optional project filter object."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        { path: { public_cloud_id: requiredInteger(input, "public_cloud_id") }, query: optionalQuery({ with: optionalString(input, "with"), filter: optionalRecord(input, "filter") }) },
        signal,
      ),
  }),
  operationAction({
    domain: "publicCloud",
    action: "getProject",
    operationId: "Public/CloudGetProjectDetails",
    summary: "Read Public Cloud project details.",
    description: "Read one Public Cloud project by product and project identifier.",
    input: [
      field("public_cloud_id", "number", true, "Public Cloud product identifier."),
      field("public_cloud_project_id", "number", true, "Public Cloud project identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: {
            public_cloud_id: requiredInteger(input, "public_cloud_id"),
            public_cloud_project_id: requiredInteger(input, "public_cloud_project_id"),
          },
          query: optionalQuery({ with: optionalString(input, "with") }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "radio",
    action: "listProducts",
    operationId: "get_1_radios",
    summary: "List Radio products.",
    description: "Read Radio products visible under one account.",
    input: [
      field("account_id", "number", true, "Infomaniak account identifier."),
      field("with", "string", false, "Optional related resources to include."),
      field("search", "string", false, "Optional search text."),
    ],
    buildRequest: (input, signal) =>
      withSignal({ query: optionalQuery({ account_id: requiredInteger(input, "account_id"), with: optionalString(input, "with"), search: optionalString(input, "search") }) }, signal),
  }),
  operationAction({
    domain: "radio",
    action: "getProduct",
    operationId: "get_1_radios_radio_product_id",
    summary: "Read one Radio product.",
    description: "Read one Radio product by identifier.",
    input: [
      field("radio_product_id", "number", true, "Radio product identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) => withSignal({ path: { radio_product_id: requiredInteger(input, "radio_product_id") }, query: optionalQuery({ with: optionalString(input, "with") }) }, signal),
  }),
  operationAction({
    domain: "radio",
    action: "listStations",
    operationId: "Streaming/radioListStations",
    summary: "List Radio stations.",
    description: "Read stations for one Radio product.",
    input: [
      field("radio_product_id", "number", true, "Radio product identifier."),
      field("with", "string", false, "Optional related resources to include."),
      field("search", "string", false, "Optional search text."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        { path: { radio_product_id: requiredInteger(input, "radio_product_id") }, query: optionalQuery({ with: optionalString(input, "with"), search: optionalString(input, "search") }) },
        signal,
      ),
  }),
  operationAction({
    domain: "radio",
    action: "listStreams",
    operationId: "get_1_radios_radio_product_id_stations_station_id_streams",
    summary: "List Radio station streams.",
    description: "Read streams for one station in one Radio product.",
    input: [
      field("radio_product_id", "number", true, "Radio product identifier."),
      field("station_id", "number", true, "Radio station identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { radio_product_id: requiredInteger(input, "radio_product_id"), station_id: requiredInteger(input, "station_id") },
          query: optionalQuery({ with: optionalString(input, "with") }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "swissBackup",
    action: "listBackups",
    operationId: "get_1_swiss_backups",
    summary: "List Swiss Backup products.",
    description: "Read Swiss Backup products visible under one account.",
    input: [field("account_id", "number", true, "Infomaniak account identifier.")],
    buildRequest: (input, signal) => withSignal({ query: { account_id: requiredInteger(input, "account_id") } }, signal),
  }),
  operationAction({
    domain: "swissBackup",
    action: "getBackup",
    operationId: "get_1_swiss_backups_swiss_backup_id",
    summary: "Read one Swiss Backup product.",
    description: "Read one Swiss Backup product by identifier.",
    input: [field("swiss_backup_id", "number", true, "Swiss Backup identifier.")],
    buildRequest: (input, signal) => withSignal({ path: { swiss_backup_id: requiredInteger(input, "swiss_backup_id") } }, signal),
  }),
  operationAction({
    domain: "swissBackup",
    action: "listSlots",
    operationId: "get_1_swiss_backups_swiss_backup_id_slots",
    summary: "List Swiss Backup slots.",
    description: "Read slots for one Swiss Backup product.",
    input: [field("swiss_backup_id", "number", true, "Swiss Backup identifier.")],
    buildRequest: (input, signal) => withSignal({ path: { swiss_backup_id: requiredInteger(input, "swiss_backup_id") } }, signal),
  }),
  operationAction({
    domain: "video",
    action: "listChannels",
    operationId: "Streaming/videoListChannels",
    summary: "List video channels.",
    description: "Read streaming video channels available to the current token.",
    input: [field("with", "string", false, "Optional related resources to include.")],
    buildRequest: (input, signal) => withSignal({ query: optionalQuery({ with: optionalString(input, "with") }) }, signal),
  }),
  operationAction({
    domain: "video",
    action: "getChannel",
    operationId: "Streaming/videoReturnAChannel",
    summary: "Read one video channel.",
    description: "Read one streaming video channel by identifier.",
    input: [
      field("channel", "number", true, "Video channel identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) => withSignal({ path: { channel: requiredInteger(input, "channel") }, query: optionalQuery({ with: optionalString(input, "with") }) }, signal),
  }),
  operationAction({
    domain: "video",
    action: "listEvents",
    operationId: "Streaming/videoListAllEvents",
    summary: "List video channel events.",
    description: "Read events for one streaming video channel.",
    input: [
      field("channel", "number", true, "Video channel identifier."),
      field("account_id", "number", true, "Infomaniak account identifier."),
    ],
    buildRequest: (input, signal) => withSignal({ path: { channel: requiredInteger(input, "channel") }, query: { account_id: requiredInteger(input, "account_id") } }, signal),
  }),
  operationAction({
    domain: "vod",
    action: "listChannels",
    operationId: "get_1_vod_channel",
    summary: "List VOD channels.",
    description: "Read VOD channels. The public catalog marks a channel parameter here, but the route path has no placeholder.",
  }),
  operationAction({
    domain: "vod",
    action: "getChannel",
    operationId: "get_1_vod_channel_channel",
    summary: "Read one VOD channel.",
    description: "Read one VOD channel by identifier.",
    input: [field("channel", "number", true, "VOD channel identifier.")],
    buildRequest: (input, signal) => withSignal({ path: { channel: requiredInteger(input, "channel") } }, signal),
  }),
  operationAction({
    domain: "vod",
    action: "browseRoot",
    operationId: "get_1_vod_channel_channel_browse",
    summary: "Browse a VOD channel root.",
    description: "Read children of one VOD channel root folder.",
    input: [field("channel", "number", true, "VOD channel identifier.")],
    buildRequest: (input, signal) => withSignal({ path: { channel: requiredInteger(input, "channel") } }, signal),
  }),
  operationAction({
    domain: "vod",
    action: "listMedia",
    operationId: "get_1_vod_channel_channel_media",
    summary: "List VOD channel media.",
    description: "Read media for one VOD channel.",
    input: [
      field("channel", "number", true, "VOD channel identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) => withSignal({ path: { channel: requiredInteger(input, "channel") }, query: optionalQuery({ with: optionalString(input, "with") }) }, signal),
  }),
  customAction({
    domain: "mail",
    action: "listUserMailboxes",
    operationIds: ["MailApplication/ListUserMailboxes"],
    summary: "List mailboxes available to the current user.",
    description: "Read mailbox-consumption mailboxes from the reviewed Mail application API surface.",
    input: [field("with", "string", false, "Included Mail application resources.")],
    mutating: false,
    run: (client, input, signal) => client.mail.application.listUserMailboxes(mailIncludedOptions(signal, optionalString(input, "with"))),
  }),
  customAction({
    domain: "mail",
    action: "listFolders",
    operationIds: ["MailApplication/ListFolders"],
    summary: "List folders for one mailbox.",
    description: "Read folders for a Mail application mailbox UUID.",
    input: [
      field("mailbox_uuid", "string", true, "Mail application mailbox UUID."),
      field("with", "string", false, "Included Mail application resources."),
    ],
    mutating: false,
    run: (client, input, signal) => client.mail.application.listFolders(requiredString(input, "mailbox_uuid"), mailIncludedOptions(signal, optionalString(input, "with"))),
  }),
  customAction({
    domain: "mail",
    action: "listThreads",
    operationIds: ["MailApplication/ListThreads"],
    summary: "List mailbox threads or messages.",
    description: "Read thread/message listings for one Mail application mailbox folder.",
    input: [
      field("mailbox_uuid", "string", true, "Mail application mailbox UUID."),
      field("folder_id", "string", true, "Mail folder identifier."),
      field("filter", "string", false, "Optional Mail application filter such as unseen."),
      field("thread_mode", "string", false, "Thread mode, usually on or off."),
      field("offset", "number", false, "Result offset."),
    ],
    mutating: false,
    run: (client, input, signal) =>
      client.mail.application.listThreads(requiredString(input, "mailbox_uuid"), requiredString(input, "folder_id"), mailThreadOptions(input, signal)),
  }),
  customAction({
    domain: "mail",
    action: "getMessage",
    operationIds: ["MailApplication/GetMessage"],
    summary: "Read one mailbox message.",
    description: "Read a message resource returned by the Mail application thread list.",
    input: [
      field("message_resource", "string", true, "Message resource path or same-origin Mail application URL."),
      field("preferred_format", "string", false, "Preferred message format, usually text or html."),
    ],
    mutating: false,
    run: (client, input, signal) => client.mail.application.getMessage(requiredString(input, "message_resource"), mailMessageOptions(input, signal)),
  }),
  customAction({
    domain: "mail",
    action: "createDraft",
    operationIds: ["MailApplication/CreateDraft"],
    summary: "Create a Mail application draft.",
    description: "Create a draft in one mailbox through the reviewed Mail application API surface.",
    input: [
      field("mailbox_uuid", "string", true, "Mail application mailbox UUID."),
      field("payload", "object", true, "Draft payload."),
    ],
    mutating: true,
    run: (client, input, signal) =>
      client.mail.application.createDraft(requiredString(input, "mailbox_uuid"), requiredRecord(input, "payload") as MailDraftPayload, mailRequestOptions(signal)),
  }),
  customAction({
    domain: "mail",
    action: "moveMessages",
    operationIds: ["MailApplication/MoveMessages"],
    summary: "Move Mail application messages.",
    description: "Move mailbox messages between folders through the reviewed Mail application API surface.",
    input: [
      field("mailbox_uuid", "string", true, "Mail application mailbox UUID."),
      field("payload", "object", true, "Message move payload."),
    ],
    mutating: true,
    run: (client, input, signal) =>
      client.mail.application.moveMessages(
        requiredString(input, "mailbox_uuid"),
        requiredRecord(input, "payload") as unknown as MailMoveMessagesPayload,
        mailRequestOptions(signal),
      ),
  }),
  operationAction({
    domain: "kchat",
    action: "listTeams",
    operationId: "GetAllTeams",
    summary: "List kChat teams.",
    description: "Read kChat teams available to the current token.",
  }),
  operationAction({
    domain: "kchat",
    action: "getTeamByName",
    operationId: "GetTeamByName",
    summary: "Resolve a kChat team by name.",
    description: "Read one kChat team from its team name.",
    input: [field("name", "string", true, "Team name.")],
    buildRequest: (input, signal) => withSignal({ path: { name: requiredString(input, "name") } }, signal),
  }),
  operationAction({
    domain: "kchat",
    action: "getChannelByNameForTeamName",
    operationId: "GetChannelByNameForTeamName",
    summary: "Resolve a kChat channel by team and channel name.",
    description: "Read one kChat channel from team name and channel name.",
    input: [
      field("team_name", "string", true, "Team name."),
      field("channel_name", "string", true, "Channel name."),
      field("include_deleted", "boolean", false, "Whether deleted channels should be considered."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { team_name: requiredString(input, "team_name"), channel_name: requiredString(input, "channel_name") },
          query: optionalQuery({ include_deleted: booleanParam(input.include_deleted) }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "kchat",
    action: "createPost",
    operationId: "CreatePost",
    summary: "Create a kChat post.",
    description: "Post a root message or thread reply in a kChat channel.",
    input: [
      field("channel_id", "string", true, "kChat channel identifier."),
      field("message", "string", true, "Message content."),
      field("root_id", "string", false, "Optional root post identifier for thread replies."),
      field("set_online", "boolean", false, "Whether to set the user online while posting."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          query: optionalQuery({ set_online: booleanParam(input.set_online) }),
          body: optionalQuery({
            channel_id: requiredString(input, "channel_id"),
            message: requiredString(input, "message"),
            root_id: optionalString(input, "root_id"),
          }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "urlShortener",
    action: "listLinks",
    operationId: "get_2_url_shortener",
    summary: "List short URLs.",
    description: "Read short URLs owned by the current token using the v2 route.",
  }),
  operationAction({
    domain: "urlShortener",
    action: "getQuota",
    operationId: "get_2_url_shortener_quota",
    summary: "Read short URL quota.",
    description: "Read URL shortener quota information using the v2 route.",
  }),
  operationAction({
    domain: "urlShortener",
    action: "createLink",
    operationId: "post_2_url_shortener",
    summary: "Create a short URL.",
    description: "Create a short URL and return the API response. Compose public URLs as https://chk.me/{code}.",
    input: [
      field("url", "string", true, "Destination URL."),
      field("expiration_date", "number", false, "Optional expiration timestamp in seconds."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          body: optionalQuery({
            url: requiredString(input, "url"),
            expiration_date: integerParam(input.expiration_date),
          }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "urlShortener",
    action: "updateExpiration",
    operationId: "put_1_url_shortener_short_url_code",
    summary: "Update short URL expiration.",
    description: "Update the expiration timestamp of an existing short URL code.",
    input: [
      field("short_url_code", "string", true, "Short URL code."),
      field("expiration_date", "number", true, "Expiration timestamp in seconds."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { short_url_code: requiredString(input, "short_url_code") },
          body: { expiration_date: requiredInteger(input, "expiration_date") },
        },
        signal,
      ),
  }),
];

const domainActions = Object.freeze([...staticActions, ...discoveryActions()].sort((left, right) => left.id.localeCompare(right.id)));
const actionById = new Map(domainActions.map((action) => [action.id, action]));
const actionDomains = new Set(listDomains().map((domain) => domain.domain));

export function listDomainActions(options: DomainActionListOptions = {}): readonly DomainActionMetadata[] {
  return domainActions
    .filter((action) => options.domain === undefined || action.domain === options.domain)
    .filter((action) => options.mutating === undefined || action.mutating === options.mutating)
    .map(toMetadata);
}

export function describeDomainAction(domain: string, action: string): DomainActionMetadata {
  return toMetadata(getAction(domain, action));
}

export async function runDomainAction(client: DomainWorkflowRuntimeClient, request: DomainActionRequest): Promise<DomainActionExecutionResult> {
  const action = getAction(request.domain, request.action);
  return {
    action: toMetadata(action),
    result: await action.run(client, request.input ?? {}, request.signal),
  };
}

export function createDomainWorkflowClient(client: DomainWorkflowRuntimeClient): DomainWorkflowClient {
  return {
    listActions: listDomainActions,
    describeAction: describeDomainAction,
    run: (request) => runDomainAction(client, request),
  };
}

function getAction(domain: string, action: string): DomainActionDefinition {
  if (!actionDomains.has(domain)) {
    throw new InfomaniakError(`Unknown Infomaniak workflow domain: ${domain}`);
  }
  const definition = actionById.get(`${domain}/${action}`);
  if (!definition) {
    throw new InfomaniakError(`Unknown Infomaniak workflow action: ${domain}/${action}`);
  }
  return definition;
}

function toMetadata(action: DomainActionDefinition): DomainActionMetadata {
  return {
    id: action.id,
    domain: action.domain,
    action: action.action,
    summary: action.summary,
    description: action.description,
    mutating: action.mutating,
    operationIds: action.operationIds,
    input: action.input,
  };
}
