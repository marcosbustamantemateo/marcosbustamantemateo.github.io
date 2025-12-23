import { useState } from "react";
import { useMessagesCRUD, Message } from "@/hooks/useMessagesCRUD";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Trash2, Mail, MailOpen, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const MessageList = () => {
  const { messages, loading, deleteMessage, toggleReadStatus } =
    useMessagesCRUD();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [viewMessage, setViewMessage] = useState<Message | null>(null);

  const handleDelete = async () => {
    if (deleteId) {
      try {
        await deleteMessage(deleteId);
        setDeleteId(null);
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  const handleToggleRead = async (id: string, currentStatus: boolean) => {
    try {
      await toggleReadStatus(id, currentStatus);
    } catch (error) {
      console.error("Error toggling read status:", error);
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat("es-ES", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(date);
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="py-10 text-center">
          <p className="text-muted-foreground">Cargando mensajes...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Mensajes de Contacto
          </CardTitle>
          <CardDescription>
            Gestiona los mensajes recibidos desde el formulario de contacto
          </CardDescription>
        </CardHeader>
        <CardContent>
          {messages.length === 0 ? (
            <p className="text-center py-8 text-muted-foreground">
              No hay mensajes
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Estado</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Asunto</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((message) => (
                    <TableRow key={message.id}>
                      <TableCell>
                        <Badge
                          variant={message.read ? "secondary" : "default"}
                          className="flex items-center gap-1 w-fit"
                        >
                          {message.read ? (
                            <MailOpen className="w-3 h-3" />
                          ) : (
                            <Mail className="w-3 h-3" />
                          )}
                          {message.read ? "Leído" : "Nuevo"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        {formatDate(message.createdAt)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {message.name}
                      </TableCell>
                      <TableCell>{message.email}</TableCell>
                      <TableCell>{message.subject}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setViewMessage(message)}
                            title="Ver mensaje"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleToggleRead(message.id, message.read)
                            }
                            title={
                              message.read
                                ? "Marcar como no leído"
                                : "Marcar como leído"
                            }
                          >
                            {message.read ? (
                              <Mail className="w-4 h-4" />
                            ) : (
                              <MailOpen className="w-4 h-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDeleteId(message.id)}
                            className="text-destructive hover:text-destructive"
                            title="Eliminar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Dialog para ver mensaje completo */}
      <Dialog open={!!viewMessage} onOpenChange={() => setViewMessage(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Mensaje de {viewMessage?.name}</DialogTitle>
            <DialogDescription>
              {formatDate(viewMessage?.createdAt)}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Email:
              </p>
              <p className="text-sm">{viewMessage?.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Asunto:
              </p>
              <p className="text-sm">{viewMessage?.subject}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Mensaje:
              </p>
              <p className="text-sm whitespace-pre-wrap">
                {viewMessage?.message}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* AlertDialog para confirmación de eliminación */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. El mensaje será eliminado
              permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
