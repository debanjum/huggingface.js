/**
 * Inference code generated from the JSON schema spec in ./spec
 *
 * Using src/scripts/inference-codegen
 */

/**
 * Chat Completion Input.
 *
 * Auto-generated from TGI specs.
 * For more details, check out
 * https://github.com/huggingface/huggingface.js/blob/main/packages/tasks/scripts/inference-tgi-import.ts.
 */
export interface ChatCompletionInput {
	/**
	 * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing
	 * frequency in the text so far,
	 * decreasing the model's likelihood to repeat the same line verbatim.
	 */
	frequency_penalty?: number;
	/**
	 * A guideline to be used in the chat_template
	 */
	guideline?: string;
	/**
	 * UNUSED
	 * Modify the likelihood of specified tokens appearing in the completion. Accepts a JSON
	 * object that maps tokens
	 * (specified by their token ID in the tokenizer) to an associated bias value from -100 to
	 * 100. Mathematically,
	 * the bias is added to the logits generated by the model prior to sampling. The exact
	 * effect will vary per model,
	 * but values between -1 and 1 should decrease or increase likelihood of selection; values
	 * like -100 or 100 should
	 * result in a ban or exclusive selection of the relevant token.
	 */
	logit_bias?: number[];
	/**
	 * Whether to return log probabilities of the output tokens or not. If true, returns the log
	 * probabilities of each
	 * output token returned in the content of message.
	 */
	logprobs?: boolean;
	/**
	 * The maximum number of tokens that can be generated in the chat completion.
	 */
	max_tokens?: number;
	/**
	 * A list of messages comprising the conversation so far.
	 */
	messages: ChatCompletionInputMessage[];
	/**
	 * [UNUSED] ID of the model to use. See the model endpoint compatibility table for details
	 * on which models work with the Chat API.
	 */
	model?: string;
	/**
	 * UNUSED
	 * How many chat completion choices to generate for each input message. Note that you will
	 * be charged based on the
	 * number of generated tokens across all of the choices. Keep n as 1 to minimize costs.
	 */
	n?: number;
	/**
	 * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they
	 * appear in the text so far,
	 * increasing the model's likelihood to talk about new topics
	 */
	presence_penalty?: number;
	response_format?: ChatCompletionInputGrammarType;
	seed?: number;
	/**
	 * Up to 4 sequences where the API will stop generating further tokens.
	 */
	stop?: string[];
	stream?: boolean;
	stream_options?: ChatCompletionInputStreamOptions;
	/**
	 * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the
	 * output more random, while
	 * lower values like 0.2 will make it more focused and deterministic.
	 *
	 * We generally recommend altering this or `top_p` but not both.
	 */
	temperature?: number;
	tool_choice?: ChatCompletionInputTool;
	/**
	 * A prompt to be appended before the tools
	 */
	tool_prompt?: string;
	/**
	 * A list of tools the model may call. Currently, only functions are supported as a tool.
	 * Use this to provide a list of
	 * functions the model may generate JSON inputs for.
	 */
	tools?: ToolElement[];
	/**
	 * An integer between 0 and 5 specifying the number of most likely tokens to return at each
	 * token position, each with
	 * an associated log probability. logprobs must be set to true if this parameter is used.
	 */
	top_logprobs?: number;
	/**
	 * An alternative to sampling with temperature, called nucleus sampling, where the model
	 * considers the results of the
	 * tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10%
	 * probability mass are considered.
	 */
	top_p?: number;
	[property: string]: unknown;
}

export interface ChatCompletionInputMessage {
	content: ChatCompletionInputMessageContent;
	name?: string;
	role: string;
	[property: string]: unknown;
}

export type ChatCompletionInputMessageContent = ChatCompletionInputMessageChunk[] | string;

export interface ChatCompletionInputMessageChunk {
	image_url?: ChatCompletionInputURL;
	text?: string;
	type: ChatCompletionInputMessageChunkType;
	[property: string]: unknown;
}

export interface ChatCompletionInputURL {
	url: string;
	[property: string]: unknown;
}

export type ChatCompletionInputMessageChunkType = "text" | "image_url";

export interface ChatCompletionInputGrammarType {
	type: ChatCompletionInputGrammarTypeType;
	/**
	 * A string that represents a [JSON Schema](https://json-schema.org/).
	 *
	 * JSON Schema is a declarative language that allows to annotate JSON documents
	 * with types and descriptions.
	 */
	value: unknown;
	[property: string]: unknown;
}

export type ChatCompletionInputGrammarTypeType = "json" | "regex";

export interface ChatCompletionInputStreamOptions {
	/**
	 * If set, an additional chunk will be streamed before the data: [DONE] message. The usage
	 * field on this chunk shows the token usage statistics for the entire request, and the
	 * choices field will always be an empty array. All other chunks will also include a usage
	 * field, but with a null value.
	 */
	include_usage: boolean;
	[property: string]: unknown;
}

/**
 * Controls which (if any) tool is called by the model.
 */
export type ChatCompletionInputTool = ChatCompletionInputToolChoiceEnum | ChatCompletionInputToolChoiceObject;

/**
 * Means the model can pick between generating a message or calling one or more tools.
 *
 * Means the model will not call any tool and instead generates a message.
 */
export type ChatCompletionInputToolChoiceEnum = "auto" | "none";

export interface ChatCompletionInputToolChoiceObject {
	function: ChatCompletionInputFunctionName;
	[property: string]: unknown;
}

export interface ChatCompletionInputFunctionName {
	name: string;
	[property: string]: unknown;
}

export interface ToolElement {
	function: ChatCompletionInputFunctionDefinition;
	type: string;
	[property: string]: unknown;
}

export interface ChatCompletionInputFunctionDefinition {
	arguments: unknown;
	description?: string;
	name: string;
	[property: string]: unknown;
}

/**
 * Chat Completion Output.
 *
 * Auto-generated from TGI specs.
 * For more details, check out
 * https://github.com/huggingface/huggingface.js/blob/main/packages/tasks/scripts/inference-tgi-import.ts.
 */
export interface ChatCompletionOutput {
	choices: ChatCompletionOutputComplete[];
	created: number;
	id: string;
	model: string;
	system_fingerprint: string;
	usage: ChatCompletionOutputUsage;
	[property: string]: unknown;
}

export interface ChatCompletionOutputComplete {
	finish_reason: string;
	index: number;
	logprobs?: ChatCompletionOutputLogprobs;
	message: ChatCompletionOutputMessage;
	[property: string]: unknown;
}

export interface ChatCompletionOutputLogprobs {
	content: ChatCompletionOutputLogprob[];
	[property: string]: unknown;
}

export interface ChatCompletionOutputLogprob {
	logprob: number;
	token: string;
	top_logprobs: ChatCompletionOutputTopLogprob[];
	[property: string]: unknown;
}

export interface ChatCompletionOutputTopLogprob {
	logprob: number;
	token: string;
	[property: string]: unknown;
}

export interface ChatCompletionOutputMessage {
	content?: string;
	role: string;
	tool_calls?: ChatCompletionOutputToolCall[];
	[property: string]: unknown;
}

export interface ChatCompletionOutputToolCall {
	function: ChatCompletionOutputFunctionDefinition;
	id: string;
	type: string;
	[property: string]: unknown;
}

export interface ChatCompletionOutputFunctionDefinition {
	arguments: unknown;
	description?: string;
	name: string;
	[property: string]: unknown;
}

export interface ChatCompletionOutputUsage {
	completion_tokens: number;
	prompt_tokens: number;
	total_tokens: number;
	[property: string]: unknown;
}

/**
 * Chat Completion Stream Output.
 *
 * Auto-generated from TGI specs.
 * For more details, check out
 * https://github.com/huggingface/huggingface.js/blob/main/packages/tasks/scripts/inference-tgi-import.ts.
 */
export interface ChatCompletionStreamOutput {
	choices: ChatCompletionStreamOutputChoice[];
	created: number;
	id: string;
	model: string;
	system_fingerprint: string;
	usage?: ChatCompletionStreamOutputUsage;
	[property: string]: unknown;
}

export interface ChatCompletionStreamOutputChoice {
	delta: ChatCompletionStreamOutputDelta;
	finish_reason?: string;
	index: number;
	logprobs?: ChatCompletionStreamOutputLogprobs;
	[property: string]: unknown;
}

export interface ChatCompletionStreamOutputDelta {
	content?: string;
	role: string;
	tool_calls?: ChatCompletionStreamOutputDeltaToolCall;
	[property: string]: unknown;
}

export interface ChatCompletionStreamOutputDeltaToolCall {
	function: ChatCompletionStreamOutputFunction;
	id: string;
	index: number;
	type: string;
	[property: string]: unknown;
}

export interface ChatCompletionStreamOutputFunction {
	arguments: string;
	name?: string;
	[property: string]: unknown;
}

export interface ChatCompletionStreamOutputLogprobs {
	content: ChatCompletionStreamOutputLogprob[];
	[property: string]: unknown;
}

export interface ChatCompletionStreamOutputLogprob {
	logprob: number;
	token: string;
	top_logprobs: ChatCompletionStreamOutputTopLogprob[];
	[property: string]: unknown;
}

export interface ChatCompletionStreamOutputTopLogprob {
	logprob: number;
	token: string;
	[property: string]: unknown;
}

export interface ChatCompletionStreamOutputUsage {
	completion_tokens: number;
	prompt_tokens: number;
	total_tokens: number;
	[property: string]: unknown;
}
