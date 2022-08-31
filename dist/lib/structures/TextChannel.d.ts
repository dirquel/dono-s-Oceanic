import TextableChannel from "./TextableChannel";
import type AnnouncementChannel from "./AnnouncementChannel";
import type PublicThreadChannel from "./PublicThreadChannel";
import type PrivateThreadChannel from "./PrivateThreadChannel";
import { ChannelTypes } from "../Constants";
import type Client from "../Client";
import type { EditTextChannelOptions, RawPrivateThreadChannel, RawPublicThreadChannel, RawTextChannel } from "../types/channels";
import type { JSONTextChannel } from "../types/json";
import Collection from "../util/Collection";
/** Represents a guild text channel. */
export default class TextChannel extends TextableChannel<TextChannel> {
    /** The threads in this channel. */
    threads: Collection<string, RawPublicThreadChannel | RawPrivateThreadChannel, PublicThreadChannel | PrivateThreadChannel>;
    type: ChannelTypes.GUILD_TEXT;
    constructor(data: RawTextChannel, client: Client);
    /**
     * Convert this text channel to a announcement channel.
     */
    convert(): Promise<AnnouncementChannel>;
    /**
     * Edit this channel.
     * @param options The options for editing the channel
     */
    edit(options: EditTextChannelOptions): Promise<this>;
    /**
     * Follow an announcement channel to this channel.
     * @param webhookChannelID The ID of the channel to follow the announcement channel to.
     */
    followAnnouncement(webhookChannelID: string): Promise<import("../types/channels").FollowedChannel>;
    toJSON(): JSONTextChannel;
}
