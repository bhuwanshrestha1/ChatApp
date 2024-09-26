import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // Corrected this line

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {  
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.message.push(newMessage._id);
        }

        //Socket IO functionality

        // await conversation.save(); 1st
        // await newMessage.save(); 2nd

        //This will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const getMessage = async ( req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all :[senderId, userToChatId]},
      }).populate("message");// not reference but actual message

      if(!conversation){
        return res.status(200).json([]);
      }

      const message = conversation.message;

      res.status(200).json(conversation.message);

       
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}